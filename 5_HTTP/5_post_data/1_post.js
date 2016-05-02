// First we need the http module and access to the file system
var http = require('http');
var fs = require('fs');
var port = 3000;

// Now, we can set up the server
http.createServer(function(req, res){

	// We can handle a GET or POST request
	if (req.method === 'GET') {
		if (req.url === '/') {

			// Serve the html form file, with a read stream piped to the response
			fs.createReadStream('./2_form.html', 'UTF-8').pipe(res);

		}else{
			res.writeHead(404, {"Content-Type":"text/plain"});
			res.end("404 File Not Found");
		}
	}else if(req.method === 'POST'){

		var body = '';

		// We set up a listener for the request to see if data is piped in
		req.on('data', function(fragment){

			// As it is piped in, add it to the body variable
			body += fragment;			
		});

		// When the request is complete, respond with the data
		req.on('end', function(){

			console.log("Finished POSTING");
			res.writeHead(200, {"Content-Type":"text/plain"});
			res.end(body);
		});

	}

}).listen(port);

console.log(`Server Running on ${port}`);
