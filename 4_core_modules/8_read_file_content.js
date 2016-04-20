// Since we are interacting with the file system, we need the fs library
var fs = require('fs');
var path = require('path');

// We can read from a directory or single files synchronously or asynchronously, just specify the directoy location and callback
fs.readdir('./4_modules', function(error, files){
// We get back a potential error and files in that directory

if (error) {
	console.log(`There was an error: ${error}`);
};

// Then for each file we can print its contents
files.forEach(function(filename){
	// define the full file path
	var file = path.join(__dirname, '4_modules', filename);
	// Check to make sure the file's stats checkout and that it's not the Mac hidden file
	if (fs.statSync(file).isFile() && filename !== '.DS_Store') {
		// Now we can read the file
		fs.readFile(file, 'UTF8', function(error, contents){
			// Print the file's information
			console.log(contents);
		})
	};
})

});