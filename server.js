var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {

		console.log('Request: ' + new Date().toString() + ' - ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

//GET REQUEST
//ROUTE


app.use(middleware.logger);

// ABOUT 
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

//expose an entire folder
app.use(express.static(__dirname + '/public'));
console.log();

app.listen(PORT, function () {
	console.log('Express Server started on port ' + PORT);
});