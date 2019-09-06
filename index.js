var express = require('express');
var app = express();
var os = require('os');


app.get('/', function (req, res) {
  res.send('Hello World from ' + os.hostname());
});


app.listen(process.env.PORT || 8080, function () {
  console.log('app listening on port 8080!');
});
