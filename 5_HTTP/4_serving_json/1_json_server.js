// First we need to require the http module and the JSON data file we are working with
var http = require('http');
var data = require('./2_data');
var port = 3000;

// Next, like any other server, we create the server and start listening on a port
http.createServer(function(req, res){

	//Within the creation of the server we need to create routes depending on what url is requested
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		// Return all data as a string
		res.end(JSON.stringify(data));

		// If the user requests the fiction url
	}else if (req.url === '/fiction'){

		// just call the function for filtering fiction data, passing the response object
		fiction(res);

	}else if (req.url === '/nonfiction'){

		// call the function for nonfiction titles
		nonfiction(res);

	} else {
		// If no defined route is requested, 404
		res.writeHead(404, {'Content-Type':'text/plain'});
		res.end("404: Page Not Found");
	};

}).listen(port);

console.log(`Server is running on port ${port}`);

// We can create functions to represent the different data filters
function fiction (res) {

	// Here we create a variable that collects filtered items, one-by-one fromt the whole data set, returning true or false for that item if we want it
	var onlyFictionItems = data.filter(function(item){
		return item.genre === 'fiction';
	});

	// Then we need to end the response and return that data object
	res.end(JSON.stringify(onlyFictionItems));
};


function nonfiction (res) {
	
	// return items of the data object that are nonfiction in an array
	var onlyNonFictionItems = data.filter(function(item){
		return item.genre === 'nonfiction';
	});

	// return only items in teh nonfiction list
	res.end(JSON.stringify(onlyNonFictionItems));
}