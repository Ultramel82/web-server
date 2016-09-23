var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

app.use(middleware.logger);

// ABOUT 
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us!!');
});

//expose an entire folder
app.use(express.static(__dirname + '/public'));
console.log();

app.listen(PORT, function () {
	console.log('Express Server started on port ' + PORT);
});