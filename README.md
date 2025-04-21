# BrowserExtensionUi

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
