// import sintax in node js by using const
const http = require('http');

//import app
const app = require('./app');

// environtment  variable or through hard coded port
const port = process.env.PORT || 3000;

// create server and store it in constant 
// with http package and create server command
// pass a listener (a function that is executed when ever we get a new request)
// it is responsible for returing response  
const server = http.createServer(app);

// start listen the port
// execute what ever listener we pass to createServer()
server.listen(port, () =>
console.log(`Example app listening on port ${port}!`));