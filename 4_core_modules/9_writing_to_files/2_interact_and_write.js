// 2_interact_and_write.js
// This file is using fs to write to the filesystem whenever the user interacts
var fs = require('fs');
// We also need the readline functionality
var readline = require('readline');
// From this we need to establish a readline process for input and output
var rl = readline.createInterface(process.stdin, process.stdout);

// Creating a JS object for a Person, for a fake database
var Person ={
	name: '',
	location: ''
};

rl.question("What is the subject of this datastore?", function(response){

	var title = response.trim();
	fs.writeFile(`${title}.md`, title+ '\n' + '='.repeat(title.length) +'\n')

	rl.setPrompt("Enter the name and location entry: ");
	rl.prompt();

	rl.on('line', function(entry){
		if (entry.trim() == 'q') {
			rl.close();
		}else{
			rl.setPrompt("Enter the name and location entry: ");
			rl.prompt();
		};

		fs.appendFile(`${title}.md`, `* ${entry.trim()} \n`);
	});
});