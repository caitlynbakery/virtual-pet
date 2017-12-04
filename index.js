var express = require('express');
var app = express();

app.use(express.static('public'));
app.listen(3000, function(){
    console.log('virtual pet server started on port 3000');
    console.log('go to http://localhost:3000');
});