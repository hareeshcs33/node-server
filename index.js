const Person = require('./person');
const person1 = new Person('Hareesh', 28);
console.log(person1.greeting());

// var http = require('http');
// http.createServer(function(request, response){
//     response.writeHead(200,
//         {'Content-Type': 'text/plain'});
//     response.end('Hello World'); //this statement used t0 send the response to the browser i.e client
// }).listen(5000); //
// console.log('server running at http://localhost:5000');

// var http = require('http');
// http.createServer(function(request, response){
//     response.write('Hello World');
//     response.end(); //this statement used t0 send the response to the browser i.e client
// }).listen(5000);
// console.log('server running at http://localhost:5000');
