//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
const config = require('./config/database');

var app = express();

const route = require('./routes/route');

//connect to mongoosedb
mongoose.connect('mongodb://easybuoy:VIbPabyeiShryo9@ds235065.mlab.com:35065/school_portal');

//on connection
mongoose.connection.on('connected', function () {
    console.log('Conntected  to Database');
})
//
//
// //on connection error
mongoose.connection.on('error', function (err) {
    if(err){
        console.log('Error in Database Connection', +err);
    }
})


//port no
// const port = 3000;
const port = process.env.PORT || 8080;

//adding middleware
 app.use(cors());
//
//body-parser
app.use(bodyParser.json());
//
// //static files
 app.use(express.static(path.join(__dirname, 'frontend/dist')));

 // Send all other request to Angular
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '/frontend/dist'));
// });



//routes
 app.use('/api', route);



//testing server
app.get('/',function (req, res) {
    res.sendFile(__dirname + '/frontend');
});

app.listen(port,function () {
     console.log('Server started at port'+port);
});