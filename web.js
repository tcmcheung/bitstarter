///#!/usr/bin/env node

var express = require('express');
var file = require('fs');
var welcomemsg = new Buffer (64);
var fs = require ('fs');

var app = express.createServer(express.logger());
  
app.get('/', function(request, response) {
  
  var welcomemsg = new Buffer (fs.readFileSync('index.html'),'utf-8');
   welcomemsg = fs.readFileSync('index.html');
  var welcome = welcomemsg.toString('utf-8',0,welcomemsg.length);
  response.send(welcome);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
