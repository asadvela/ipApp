var expess = require('express');
var multer = require('multer');
var layout = require('express-layout');
var validator = require('express-validator');
var bodyparser = require('body-parser');
var uniquestring = require('unique-string');
var fileupload = require('express-fileupload');
var session = require('express-session');
var ejs = require('ejs');
var engine = require('ejs-mate');
var mysql = require('mysql');
var path = require('path');

var app =  express();
app.use(fileupload());
var middleware= [layout(), express.static(path.join(__dirname,'public'))];
app.use(middleware);
app.engine('ejs', engine)
app.set('view engine',ejs)
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

const routes = require('./routes')
app.use('/', routes)



