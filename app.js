//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();


//port no
const port = 3000;

//testing server
app.get('/',function (req, res) {
   res.send('Me');
});

app.listen(port,function () {
     console.log('Server started at port'+port);
});