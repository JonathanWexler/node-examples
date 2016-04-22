// Here we want to rename a file and remove a file
var fs = require('fs');

// First we can create a new file
fs.writeFile('test.js');

// Next we can use rename to either rename or move the file
fs.renameSync('test.js', 'tested.js');

// To remove the file we can use unlink and wrap it in a try catch to avoid crashing the application
try{
	fs.unlinkSync('tested.js');
}catch(error){
	console.log("ERROR in removing that file!")
}
