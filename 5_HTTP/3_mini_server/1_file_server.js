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

		// We read a file from the public folder and handle its content and possible errors
		fs.readFile('./2_public/index.html', 'UTF-8', function(error, html){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(html);
		})
		// Check to see if the url ends with .css and serve css files
	}else if(req.url.match(/.css$/)){

		// lets define the path to find any css file in the public folder
		var style_path = path.join(__dirname, '2_public', req.url);

		// Since reading files means loading the whole file at once, its better to use the readStream
		var stream = fs.createReadStream(style_path, 'UTF-8');
		res.writeHead(200, {'Content-Type': 'text/css'});

		// reponse object is a writable stream which can be piped to from the read stream
		stream.pipe(res);

		// Last serve jpg images
	}else if(req.url.match(/.png$/)){

		// set the path
		var image_path = path.join(__dirname, '2_public', req.url);

		// Read the image as binary
		var stream = fs.createReadStream(image_path);

		// set the response type as image
		res.writeHead(200, {'Content-Type': 'image/png'});
		// write the image to the response
		stream.pipe(res);

	}else{
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end("404 File Not Found");
	};

}).listen(3000);

// Simple message to let you knwo the server is running
console.log("Server up at port 3000");