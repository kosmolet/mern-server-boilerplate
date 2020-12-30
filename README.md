# This is basic boilerplate for node/express/mongo server  

boilerplate includes 

* Configuration for ESlint With Prettier + Husky and Airbnb Style Guide  
* CI using GitHub actions for Lint and Test passing checks
* Basic Server set up
* Basic Tests set up with chai-mocha-supertest
* Mongo data base connection
* Nyc and coveralls to verify test coverage
* Pino logger to make logs maintainable and readable 

### Set up and start: 
Run `npm i`, after run `npm run dev`

### Dependencies  
[Express](https://www.npmjs.com/package/express) backend web application framework for Node  
[Dotenv](https://www.npmjs.com/package/dotenv) module that loads environment variables from a .env file into process.env  
[mongoose](https://mongoosejs.com/) mongodb object modeling for node.js    
[nodemon](https://www.npmjs.com/package/nodemon) tool which automatically restarting the node application when file changes in the directory are detected  
[chai](https://www.chaijs.com/) BDD / TDD assertion library for node    
[mocha](https://mochajs.org/) test framework running on Node.js   
[supertest](https://www.npmjs.com/package/supertest) module provides a high-level abstraction for testing HTTP, while still allows to drop down to the lower-level API provided by superagent  
[nyc](https://www.npmjs.com/package/nyc) tool uses Istanbul's text reporter  
[coveralls](https://coveralls.io/) tool for adding coverage reporting to continuous-integration flow  
[mongo-seeding](https://www.npmjs.com/package/mongo-seeding) solution for populating MongoDB database    
[cors](https://www.npmjs.com/package/cors) node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options  
[pino*](https://github.com/pinojs/pino) Node.js logger  



