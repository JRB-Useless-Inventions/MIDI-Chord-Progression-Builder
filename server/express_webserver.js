"use strict";

const exp = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const https = require('https');
const http = require('http');

function EXPRESS() {
    
    this.app = exp();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    //this.app.use(exp.static('client'));
};

EXPRESS.prototype.listen = function(port){
    if (!port) {
        this.port = process.env.PORT;
    }
    else{
        this.port = port;
    }
    this.app.listen(this.port,function(){
        console.log("Server up and listening");
    });

    return this.app;
};
function HTTP(){
    var httpServer = http.createServer(app);
    httpServer.listen(process.env.PORT || 3000, function() {
    });
    return http;
}

function HTTPS(){
    var httpsServer = http.createServer(app);
    httsServer.listen(process.env.PORT || 3000, function() {
    });
    return http;
}

module.exports.EXPRESS = EXPRESS;
module.exports.HTTP = HTTP;
module.exports.HTTPS = HTTPS;
