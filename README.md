# Used stack
- [ReactJS](https://github.com/facebook/react)
- [Redux](https://github.com/reactjs/redux)
- [Redux-toolkit](https://redux-toolkit.js.org)
- [Babel](https://github.com/babel/babel)
- [Eslint](https://github.com/eslint/eslint)
- [Webpack 4.x](https://webpack.js.org/)
- [Redux saga](https://redux-saga.js.org/)
- [Apollo](https://www.apollographql.com/)

# Installation

#### Project requires:
* [Node.js](https://nodejs.org/) v.14.x

#### To install project locally go through further steps:

Install the dependencies and devDependencies:
```sh
$ yarn install
```

Copy `.env.default` file to `.env` and add proper variables for your environment.
```sh
$ yarn env
```

Run application locally. Appliation will be available on `http://localhost:3000`.
```sh
$ yarn start
```

# Available commands
Run the application locally in development mode. Available on `http://localhost:3000`.
```sh
$ yarn start
```

Run the application locally in production mode. Available on `http://localhost:3000`.
```sh
$ yarn start:prod
```

Run eslint.
```sh
$ yarn lint
```

Copy `.env.default` file to `.env` and add proper variables for your environment.
```sh
$ yarn env
```

Build the project with production environment. Project will be built to `./public` folder.
```sh
$ yarn build:prod
```
