var express = require('express');
var os = require('os');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World from ' + os.hostname());
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});