// To execute commands in the environment, we need the child_process module and exec
var exec = require('child_process').exec;

// We can now pass commands to exec, to execute in terminal
exec('ls', function(error, output){
	// If there is an error, we can handle it
	if (error) {
		console.log("Error is found!");
		// or throw err;
	} else {
		// Here we can output the items in the directory
		console.log(output);
	};
});