// server.js (Express 4.0)
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.sendFile('index.html');
})
app.listen(process.env.PORT || 5000);
