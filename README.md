# Run angular application

## #Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Make sure to run it in the web directory.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Run Server

Run `npm server:dev` into the main directory. If you have problems with the global instalation of webpack run
NODE_ENV=development npx webpack build --config ./server/webpack.config.js --watch & ./node_modules/nodemon/bin/nodemon.js server/dist/index.js

The angular server is runing on 4200, the node server is on port 3000. Currently the angulars dev server has a proxy in which if you call /api is opening the :3000/api so if you want to change the port the site won't work.

## Both of the server need to run in order to work.
