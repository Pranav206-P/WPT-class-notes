import express from "express";
// const express = require("express");

const app = express(); // it will create an express application
// and this express application is nothing but your server

//127.0.0.1:6500/

const myMiddleware = (req, res, next)=>{
    console.log("control is in middleware...");
    next();
};

app.use(myMiddleware);
app.use(express.json());

//Router 
app.get("/", (request, response) => {
    response.status(200).send({ message: "Hello world" });
});

app.get("/login", (request, response) => {
    response.send("welcome to login");
});

// /sum/3/5
app.get("/sum/:a/:b", (request, response) => {
    // express is going to prepare an object of all the url parameters
    // {a:3, b:5}
    //
    const paramsData = request.params; // url params
    var z = parseInt(paramsData.a) + parseInt(paramsData.b);
    response.send({ sum: z });
});

app.get("/factorial/:num", (request, response) => {
    const n = parseInt(request.params.num); // request.params = {num:4}
    if (n < 0) {
        response.status(400).send({message:"Negative values are not allowerd"});
    }
    else {
        let fact = 1;
        for (var i = 1; i <= n; i++) {
            fact = fact * i;
        }
        response.send({ factorial: fact });
    }

});

app.post("/add" ,(request, response)=>{
    console.log(request.body);
    const {x, y} = request.body; // {x:7, y:7}
    const z = x + y;
    response.send({sum:z});
});

app.get("/middleware-demo", (req, res)=>{
    console.log("req started processing...");
    res.send({message:"Dummy response"});
});

app.listen(6500);