// First we need to include express
var express = require('express');

// Next we need to create an app instance of express
var app = express();

// Now we can invoke this express instance to print when we make a request on it 
app.use(function(req, res, next){

	// print the requested URL
	console.log(`The URL requested is ${req.url}`);
	// This  will let us continue to the next command
	next();
});

// Static lets us serve static files from a specified directory
app.use(express.static('./2_public'));

// We need to listen to requests for this application
app.listen(3000);

// A log message to let us know the server is running
console.log("Server is running on port 3000");

// Lastly, export the app for use outside this file
module.exports = app;