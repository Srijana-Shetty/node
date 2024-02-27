//how to export and require modules wiith NODE JS
/*const fs = require("fs");

//const f= require("./module1.js")
const {f, P} = require("./first")  //path 
//const x = require("./first")

f();
console.log(P) */
//f.x();
//x();


// handling request in express
"use strict";
const express = require("express");
const app = express();
const http = require('http');
//console.log(http.METHODS)
console.log(http.STATUS_CODES);

app.get("/",(req, res) => {
    console.log(req.headers);
    console.log(req.url);
    console.log(req.ip);  
    console.log(req.hostname);      
    console.log(req.method);   //get post put patch
    console.log(req.protocol);  //http /https
    console.log(req.path);      //just the path part of the url
    console.log(req.query);      //querystring
    console.log(req.subdomains);   //test.sales.example.com ['test','sales' ]
    console.log(req.params);        // /user/72  /products/234234(details of user number 72) /product/234234
    //  app.get("/user/:id")   app.get("/product/:id")
    //req.params.id
    res.status(404).end()
});

//app.post("/thing")

app.listen(3000, err => {
    if(err) {
        console.log("there was a problem ", err);
        return;
    }
    console.log("listening on port 30000")
})