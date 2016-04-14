// To read files from the filesystem we need the fs module
var fs = require('fs');

// Now we can use the filesystem library to read from a directory (or create, delete, or change directories or files) synchronously or asynchronously
var files = fs.readdirSync('./4_modules')
// Above will read the files from the specified directory synchronously, and return those values we can print
console.log(files);

// To read asynchronously we remove 'Sync', but we need a callback function when complete
// The callback will take a potential error and read files/data
fs.readdir('./4_modules', function(error, data){
	if (error) {
		throw error;
	};
	// print files
	console.log(data);
});

console.log("Will run first due to asynchronous call above:");