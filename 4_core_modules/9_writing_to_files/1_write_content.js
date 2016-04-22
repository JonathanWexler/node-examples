// Using the fs module, we can write content to a specific file
var fs = require('fs');

// Here is some markdown content
var content = `

Title
======

subtitle
--------

* bullet one
* bullet two
* bullet three

`;

// Next we can use writeFile to specify the file and variable of content we want to use, here asynchronously
fs.writeFile("demo.md", content.trim(), function(error){

	// Since we are working asynchronously, we need a callback that may have an error
	console.log("File Written To!")
})