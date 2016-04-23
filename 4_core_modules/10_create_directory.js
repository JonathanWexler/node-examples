// 10_create_directory.js
// To create a directory we can use fs
var fs = require('fs');

// We can check if a directory exists with the following
if (fs.existsSync('newDir')) {
	console.log("Directory already exists!");
} else{
	// mkdir will create a directory
	fs.mkdir('newDir');
	console.log("Directory was created!");
};
