import {createServer} from 'http';
import {sum, product} from "./mymodule.js";

const server =createServer((request, response)=>{
    var sumRs = sum(10,20);
    var productRs = product(10,20);
    response.write(`Sum of 10 and 20 is ${sumRs} and Product of 10 and 20 is ${productRs}`);
    response.end();
});

server.listen(5000);