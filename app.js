//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');


var app = express();

const route = require('./routes/route');

//port no
const port = 3000;

//adding middleware
 app.use(cors());
//
//body-parser
app.use(bodyParser.json());
//
// //static files
 app.use(express.static(path.join(__dirname, 'public')));
//
//routes
 app.use('/api', route);



//testing server
app.get('/',function (req, res) {
   res.send('Meus');
});

app.listen(port,function () {
     console.log('Server started at port'+port);
});