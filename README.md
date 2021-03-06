# Highcharts Event Management In Angular

This demo shows how to link chart events (e.g. point click) to their Angular parent component. It uses the `highcharts` library
together with `highcharts-angular`, a minimal Highcharts wrapper for Angular.

Once the chart is created, we add functions as custom properties to the chart instance. This allows chart event handlers to communicate with the Angular component that hosts the chart. In our case, when a column is clicked, the component selects the corresponding tab panel. Check out the [live version](https://alexlehner86.github.io/highcharts-event-mgmt-in-angular/).

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
