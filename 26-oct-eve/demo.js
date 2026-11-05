// const http = require("http");

// const server = http.createServer((request,response)=>{
//     response.write("Hello World");
//     response.end();
// }); 
// // when we will run this js file a new server will be created 
// // but this callback will not be executed at that time
// // the callback will only be executed when there is a request from a client onto this server 
// // this callback is used to process the request and generate the response 
// // with the createServer(), a server will be created only it will not get started 

// server.listen(6500); // it will start the server and
// //  will continuously listen for the requests on the mentioned port number

const myModule = require("./mymodule.js");

const rs = myModule.sum(2,5);

console.log(rs);

const result = myModule.product(3,8);
console.log(result);

