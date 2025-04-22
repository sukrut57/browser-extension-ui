#Stage 1: build the angular app
FROM node:18.16.0-alpine3.18 AS builder
LABEL authors="sukrut k pasumarthi"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# stage 2: serve the app with nginx server
FROM nginx:1.25.2-alpine
COPY --from=builder /app/dist/browser-extension-ui /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
