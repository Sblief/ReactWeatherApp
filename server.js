var express = require("express");



//create our app 
var app = express();

app.use(express.static('public'));

app.listen(300, function() {
	console.log('Express server is running on port 300');
});