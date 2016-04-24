// To stream datafrom a file we can use fs.createReadStream and the stream's methods
var fs = require('fs');

// If we want we can store the data's results to a new string var total = ""
// This sets up the stream to read from the following file
var stream = fs.createReadStream('2_readline.js');

// Here is an event listener to occur the first time data is received
stream.once('data', function(){
	console.log("\nStarted Reading...\n");
});

// Here is an event listener for every time data is received
stream.on('data', function(data){
	console.log(`\nData received of length ${data.length} \n`)
});

// Lastly, we have an event listener for the stream when it is complete
stream.on('end', function(){
	console.log("Stream has complete!")
});