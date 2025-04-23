# BrowserExtensionUi

## v1 capabilities

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```


## Deploy the application to the server - Github pages
Run `npm install -g angular-cli-ghpages` to install the angular-cli-ghpages package globally.

Run  `ng build --base-href "https://{{github_profile}}.github.io/{{repo_name}}/"` to build the project. The build artifacts will be stored in the `dist/` directory.

RUN `npx  angular-cli-ghpages --dir=dist/{{repo_name}}/browser`

If the above is not working, you can try the following command:

This command will deploy the contents of the `dist/browser-extension-ui/browser` directory to the specified GitHub repository.

RUN `npx angular-cli-ghpages --dir=dist/browser-extension-ui/browser --repo=https://github.com/sukrut57/browser-extension-ui.git`

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## v2 capabilities

# Angular 19 App with Docker and Nginx

## Overview
This project is an Angular application containerized using Docker and served with Nginx. It includes a CI/CD pipeline for building and pushing the Docker image to Docker Hub.

---

## Features
- Angular 19 application with dynamic theme toggle and SVG icon integration.
- Dockerized application with multi-stage builds for optimized image size.
- Nginx configuration for serving the Angular app and handling routes.
- CI/CD pipeline using GitHub Actions to build and push Docker images.

---

## Prerequisites
- Node.js (v18.19.0 or later)
- Angular CLI
- Docker and Docker Compose
- GitHub account with Docker Hub credentials

---

## Project Structure
- `src/`: Angular application source code.
- `Dockerfile`: Multi-stage Dockerfile for building and serving the app.
- `nginx.conf`: Nginx configuration for serving the Angular app.
- `.github/workflows/docker.yml`: GitHub Actions workflow for CI/CD.
- `docker-compose.yml`: Docker Compose configuration for local development.

---

## Setup Instructions

### 1. Clone the Repository

git clone <repository-url>
cd <repository-folder>

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Application
```bash
npm run build --prod
```

### 4. Run Locally with Docker Compose
```bash
docker-compose up --build
```
Access the app at http://localhost:9090.<hr></hr>

## Deployment Instructions
### 1. Build the Docker Image
```bash
docker build -t <dockerhub-username>/angular19-app:latest .
docker push <dockerhub-username>/angular19-app:latest
```
### 2. Run the Docker Container
```bash
docker run -p 9090:80 <dockerhub-username>/angular19-app:latest
```

## CI/CD Pipeline
The GitHub Actions workflow (.github/workflows/docker.yml) automates the following:  
1. Builds the Angular app.
2. Builds the Docker image.
3. Pushes the image to Docker Hub.

## Trigger
1. On push or pull_request to the master branch.
<hr></hr>

2. Nginx Configuration
The nginx.conf file ensures:

 1. Proper routing for Angular's single-page application.
 2. Correct MIME types for JavaScript and CSS files.
<hr></hr>

3. Environment Variables
 1. NODE_ENV: Set to production in docker-compose.yml.
