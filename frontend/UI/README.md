# Frontend Documentation

## Overview
This project is a frontend application built with Webpack and vanilla Javascript (ES6). It uses environment-specific configurations for development and production.

---

## Environment Setup

### Development
Start and work on the app in the development environment. Don't forget to run ```npm install``

#### Start application
Launches the app in development mode with webpack-dev-server and ```.env``` file.
```
npm start
```

### Production
Prepare the app for deployment in a production environment.
#### Build application
Builds the app for production use with Webpack in production mode and ```.env.production``` file.
```
npm run build
```

## Installed packages
```
npm install webpack --save-dev
```
```
npm install webpack-cli --save-dev
```
```
npm install webpack-dev-server --save-dev
```
```
npm install html-webpack-plugin --save-dev
```
```
npm install style-loader css-loader --save-dev
```
```
npm install dotenv dotenv-webpack --save-dev
```

## Notes
 - Ensure that .env and .env.production files are properly configured to match the backend service.
 - Infinity scroll is slow sometimes due to slow response from flickr api.