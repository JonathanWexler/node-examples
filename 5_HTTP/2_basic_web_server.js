// To create a server we need the HTTP module
var http = require('http');

// Defining a port here
var port = 3000;

// Then to create the server we use the createServer method which takes a callback function with the request and response
var server = http.createServer(function(req, res){
	// We can setup the header for the response here with status code and content type
	res.writeHead(200, {'Content-Type':'text/html'});
	// We can also print a message when the server delivers a response
	res.end(`
			<!DOCTYPE html>
			<html>
				<head>
					<title> Basic Server</title>
				</head>
				<body>
					<h1> Request Received! </h1>
					<h3>URL: ${req.url}</h3>
					<h3>METHOD: ${req.method}</h3>
				</body>
			</html>


		`)
})

// Now we need to listen for requests to our running server, indicating whatever port we want
server.listen(port);

// A quick message to indicate the server has started!
console.log(`Server has started on port ${port}`)