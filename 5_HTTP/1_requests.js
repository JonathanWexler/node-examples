// 1_requests.js
// We want t make a request to a wikipedia page and log the response
var https = require('https');
var fs = require('fs');	

// Set up options for request
var options_for_request = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/James_Franco",
	method: "GET"
};

// Define the request
var request = https.request(options_for_request, function(response){
	// Once we make the request here we can use the response as it's own process
	var total_result = '';
	var counter = 0;

	// Let the user know the connection was made
	console.log("\nReading from the site...\n");
	// And print information from the respinse
	console.log(`Status code: ${response.statusCode}`)
	console.log("HEADERS: %j", response.headers)

	// Now we can prepare to encode our response properly
	response.setEncoding("UTF-8");

	// Once we receive some response we can begin to log
	response.on('data', function(data){
		total_result += data;
		console.log(`READING Data Part ${counter++} of length ${data.length}\n`);
	});

	// When the response is complete we can document it here
	response.on('end', function(){
		console.log('\n\nCompleted Request!');
		console.log(`Total Length of Document is: ${total_result.length}`);
		fs.writeFile('results.html', total_result, function(error){
			// Try to record results to the file system and log error
			if (error) {
				console.log(`There was an error: ${error}`);
			}else{
				console.log("NO Errors!");
			};
		})
	});


});

request.on('err', function(error){
	console.log(`error: ${error}`);
});

// Important, you must end the request or print something to signify the end
request.end();