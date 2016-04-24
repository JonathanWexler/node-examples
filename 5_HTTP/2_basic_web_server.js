// To create a server we need the HTTP module
var http = require('http');

// Defining a port here
var port = 3000;

// Then to create the server we use the createServer method which takes a callback function with the request and response
var server = http.createServer(function(req, res){
	// We can setup the header for the response here with status code and content type
	res.writeHead(200, {'Content-Type':'text/plain'});
	// We can also print a message when the server delivers a response
	res.end("Request received!")
})

// Now we need to listen for requests to our running server, indicating whatever port we want
server.listen(port);

// A quick message to indicate the server has started!
console.log(`Server has started on port ${port}`)