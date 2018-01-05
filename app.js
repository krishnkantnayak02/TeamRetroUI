var express = require('express');
 
var app = express();

app.get('/', function(req, res){
    res.send("Hello in teamretro application!")
})

app.listen(3000, function(){
    console.log('listning to this joint on port 3000')
})