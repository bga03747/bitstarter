
var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var a = fs.readFileSync("index.html"); 

  var buf = new Buffer(256);

  len = buf.write(a,0);

  console.log(buf.toString('utf8', 0, len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});