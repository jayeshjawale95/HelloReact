var express = require('express');

//create app
var app = express();
//which folder to use
app.use(express.static('public'));

//start the application
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
