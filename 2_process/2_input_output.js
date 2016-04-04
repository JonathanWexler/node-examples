// We can write to the console with stdout.write
process.stdout.write('Hello');
process.stdout.write('World \n\n\n!');

// We can add more information in the form of variables
var questions = [
	"How old are you?",
	"What is your name?",
	"What is your favorite sport?"
];

// Now we can set up a function to ask questions to the user via terminal
function ask (q) {
	process.stdout.write(`${questions[q]}\n`);
	process.stdout.write(">");
};

// We can set up an array of answers to keep track of user input
var answers = [];

// This code block will listen for data being sent to the applciation and echo back that data
process.stdin.on('data', function(data){
	// process.stdout.write(`\n${data.toString().trim()}\n`);

	answers.push(data.toString().trim());

// After adding the response to the answers array we check if there are more questions to ask and ask them
	if (answers.length < questions.length) {
		ask(answers.length);
	} else {
		process.exit();
	};
});


process.on('exit', function(){
	process.stdout.write(`Hello ${answers[1]}, you are ${answers[0]} and love ${answers[2]}\n`);
})

ask(0);