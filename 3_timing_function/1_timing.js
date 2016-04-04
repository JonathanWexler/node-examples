// First we set up variables to indicate our stopping time and interval times
var waitingTime = 5000;
var intervalTime = 500;
var currentTime = 0;

// Next we can set up a setTimeout as a variable
// This alone will run through the timing function.
var timeout = function(){
	setTimeout(function(){
		writePercentage(5000);
		console.log("\n");
		process.exit();
	}, waitingTime);
};

// Function to write and clear over same line percentage increase
function writePercentage (time) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write((time/waitingTime)*100+'%');
}

// Then, to print to the terminal on the set interval time we can create a new setInterval function. By using the currentTime variable we can keep track of the time
setInterval(function(){
	currentTime += intervalTime;
	writePercentage(currentTime);
}, intervalTime);

timeout();

