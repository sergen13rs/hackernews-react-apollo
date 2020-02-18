This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Runs the app in the development mode.<br />

## Deploying the Prisma database service
### `cd server`
### `yarn install`
### `yarn prisma deploy`

Before you can start your server and begin sending queries and mutations to it.<br />
The Prisma project needs to be deployed so the GraphQL server can access it.<br />
To deploy the service all you need to do is install the server’s dependencies and invoke the prisma deploy command inside the server directory.<br />

## Exploring the server
### `cd server`
### `yarn start`

The yarn start executes the start script defined in package.json.<br />
The script first starts the server (which is then running on http://localhost:4000) and then opens up a GraphQL Playground for you to explore and work with the API.<br />

### `yarn start` into root project directory
This will open a browser and navigate to http://localhost:3000 where the app is running.<br />

