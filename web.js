var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger());

/*
app.get('/', function(request, response){
  response.send(éHello World2!");
}); 
*/

app.get('/', function(request, response) {
  buf = fs.readFileSync('index3.html');
  myString = buf.toString();
  response.send(myString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
