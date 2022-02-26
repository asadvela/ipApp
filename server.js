var express = require('express');
const request = require('request');
var app = express();

app.use(express.static('images'))
app.set('view engine', 'ejs')
// app.set('view',__dirname)
var port = process.env.PORT || 5000
app.get('/',function(req, res){
    request({url:"http://ipinfo.io/",
    json:true,},function(err,response,body){
        console.log(body)
        res.render('./index2', {body})
    })
   
})
app.listen(port, function(){console.log('server started...')})