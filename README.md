# Councils Hybrid App
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Getting Started
1. clone this repo
    `$ git clone git@github.com:councils/councils.git`
2. install dependencies `npm install`
3. start server `npm start`

> I recommend using the browser's device emulator to symlate various device sizes.

## Usage
- `$ npm start` to run webpack-dev-server
- `$ npm test` to run unit tests
- `$ npm tdd` to continuously run tests
- `$ npm run eslint` to lint code
- `$ npm run build` to build (and minify)
- `$ npm version (patch|minor|major)` to create git release

## Technology
- [webpack](http://webpack.github.io/)
- [ES2015 via Babel](https://babeljs.io/docs/learn-es2015/)
- [SCSS (SASS)](http://sass-lang.com/)
- [angular 1.x](https://angularjs.org/)

## Features
- Unit Testing
  + [karma](http://karma-runner.github.io/): Test Runner
  + [mocha](https://mochajs.org/)
  + [chai](http://chaijs.com/)
- Code Linting
  + [eslint]() - For JavaScript
- Dev Server with auto-reload
  + [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)
- Changelog Generation
  + [conventional-changelog](https://github.com/ajoslin/conventional-changelog)
- Minification
  + [UglifyJS2](https://github.com/mishoo/UglifyJS2)
- Git Release Automation
- [.editorconfig](http://editorconfig.org/)
- Single OUTPUT file (works well for NPM)
  + [webpack-style-loader](https://github.com/webpack/style-loader)

## Style Guides
- For now, we're writing everything as CommonJS2 modules.
- For CSS rules, please see [Reasonable CSS](http://rscss.io/)
- For JS rules, please see [AirBnB's styleguide](https://github.com/airbnb/javascript)
- For Angular rules, please see [John Papa's styleguide](https://github.com/johnpapa/angular-styleguide)
