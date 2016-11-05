# Node.js Server App: ES6 w/ESLint Starter Project

This repo can be used as a starter project for an ES6 Node.js server-side app.  

It features:
* Transpilation of ES6 into ES5
* Linting using the AirBNB rule set
* Conguration to have Gulp do the linting and transpilation in bulk

## Usage
* Write your server-side ES6 in the src directory
* Run the default Gulp task for linting and transpilation:
```bash
npm run build
```
* Run your app from the _dist_ directory:
```bash
npm start
```
* A simple starter app that returns "Hello World" is included in src/index.js:
```bash
curl http://localhost:3000
Hello World
---
