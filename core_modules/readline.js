// First we require the readline library
var readline = require('readline');

// Now we can use rl to handle and input and output
var rl = readline.createInterface(process.stdin, process.stdout);

// Now we can handle any questions and answers via rl.question and a callback function
rl.question("What's your name?", function(answer){
	console.log(answer);
});