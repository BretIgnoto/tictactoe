var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(8000, function() {
  console.log('Server started: http://localhost:8000/');
});