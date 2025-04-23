# Stage 1: Build the Angular app
FROM node:latest AS builder
LABEL authors="sukrut k pasumarthi"

# Create the /app directory and set it as the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./

# Install Angular CLI globally
RUN npm install

# Copy application files and build
COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with Nginx
FROM nginx:latest

# Copy the Angular app build from the builder stage
COPY --from=builder /app/dist/browser-extension-ui/browser/ /usr/share/nginx/html

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
