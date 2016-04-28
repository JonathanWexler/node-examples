// To create a file server from scratch we need access to the file system and the http node module
var fs = require('fs');
var http = require('http');
var path = require('path');

// Instead of assigning the new server to a variable, we can start and listen to it continuously on port 3000
http.createServer(function(req, res){

	// We cna keep track of what url was accessed with the request
	console.log(`${req.url} was accessed via ${req.method}`)

	// We handle the request url with different content
	if (req.url == '/') {
		fs.readFile('./2_public/index.html', 'UTF-8', function(error, html){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(html);
		})

	}else{
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end("404 File Not Found");
	};

}).listen(3000);