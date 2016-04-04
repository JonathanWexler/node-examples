// First we require the readline library
var readline = require('readline');

// Now we can use rl to handle and input and output
var rl = readline.createInterface(process.stdin, process.stdout);

// We can create a Javascript object for a person and use that person's attributes in the prompt
var person = {
	name: '',
	favoriteFoods: []
}

// Now we can handle any questions and answers via rl.question and a callback function
rl.question("What's your name?", function(answer){

	// first we will set the name of the person
	person.name = answer;

	// Next we can prompt the user for more information
	rl.setPrompt(`What food does ${person.name} enjoy?`);
	// After setting the prompt we can invoke it
	rl.prompt();
	// Lastly, we want to listen for the user setting a new line
	rl.on('line', function(data){

		// We can now continue to prompt the user until they type exit
		if (data.toLowerCase() === 'exit') {
			rl.close();
		}else{

		// add the response to the user's favoriteFoods
		person.favoriteFoods.push(data.trim());
		rl.setPrompt(`What else does ${person.name} enjoy to eat? (type 'exit' to quit)`);
		rl.prompt();
		};
	})
});


// In the end we can execute code upon the exiting of the program
rl.on('close', function(){
	// Before we complete we can print out the person's nam and a json response of their favorite foods
	console.log("%s loves to eat %j", person.name, person.favoriteFoods);
})
