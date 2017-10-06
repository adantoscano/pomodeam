var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(process.env.PORT || 3000);
