const http = require('http');

// adding external routes file from the same folder as app.js
const routes = require('./routes');

// spinning up the server by importing routes
const server = http.createServer(routes);

// if we would import multiple properties (including hardcoded text)
// const server = http.createServer(routes.handler);
// console.log(routes.someText);

server.listen(3000);