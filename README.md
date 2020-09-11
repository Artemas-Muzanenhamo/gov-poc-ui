# Gov-Poc-Ng App

[![CircleCI](https://circleci.com/gh/Artemas-Muzanenhamo/gov-poc-ui.svg?style=svg)](https://circleci.com/gh/Artemas-Muzanenhamo/gov-poc-ui)
[![codecov](https://codecov.io/gh/Artemas-Muzanenhamo/gov-poc-ui/branch/develop/graph/badge.svg)](https://codecov.io/gh/Artemas-Muzanenhamo/gov-poc-ui)
[![Build Status](https://travis-ci.org/Artemas-Muzanenhamo/gov-poc-ui.svg?branch=develop)](https://travis-ci.org/Artemas-Muzanenhamo/gov-poc-ui)


This application is a front-end Angular view for the [GOV-POC](https://github.com/Artemas-Muzanenhamo/gov-poc) application.

## Pre-requisites:
- Docker
- Java 1.8+
- MongoDB
- NodeJS

## Running the application

### Backend:
- Navigate to the GOV-POC project located [here](https://github.com/Artemas-Muzanenhamo/gov-poc).
- First build the application by running `./gradlew bootRun`.
- Execute `docker-compose up --build -d` so that Docker sets up and starts up all the services for you.
- Navigate to `localhost:8761` and you should see all the services instances (`Gateway`, `Identity-Service` and `License-Service`), loaded. 
- You could also check services via the Gateway by executing:
    - `http://localhost:9999/identity-service/identities` -> Shows you a list of all Identities.
    - `http://localhost:9999/license-service/licenses` -> Shows you a list of all Licenses. 
- If you're able to see all theses, then you're ready to start up your UI.

### UI:
- Navigate to `/gov-poc-ui/gov-poc-ng`.
- Initially execute `npm install` to install all dependencies.
- Execute `npm start -o`.

<p align="center">
  <img src="https://user-images.githubusercontent.com/29547780/37141137-00e0f69c-22ac-11e8-8fdc-999cddde3b6c.png">
</p>

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Execute linting

Run `ng lint` to execute linting and check code quality

## Running application via Docker
