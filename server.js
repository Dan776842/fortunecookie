var http = require('http');
var fs = require('fs');
var mime = require('mime')
var staticServer= require("./internals/static-server.js");


//Importando configuraciones
var config = require('./config/config');
var IP = config.IP,
    PORT = config.PORT;

var server = http.createServer(function(req, res){
    var url = req.url;
    if(url == "/"){
        url = '/index.html'
    }


    console.log(`> Recurso solicitado> ${url}`);
    staticServer.serve(url,res);
    
    });

server.listen(PORT, IP, function(){
    console.log(`> Server corriendo en http://${IP}:${PORT}...`);
});