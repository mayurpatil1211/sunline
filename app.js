var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var portNumber = process.env.PORT || 8070;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(__dirname +'/public'));


app.listen(portNumber)
console.log("listening on port "+portNumber)

