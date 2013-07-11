


var express = require('express');
var file = require('fs');
var filename = new Buffer (64);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
      
 response.send('Hello World from  '+filename);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
