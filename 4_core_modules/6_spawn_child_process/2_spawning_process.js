// Now, to use spawn we can call the other file to run as a child process and pay attention to its output
var spawn = require('child_process').spawn;

// Like exec, this is how spawn invokes another process
var child_process = spawn('node', ['1_spawn_process.js']);

child_process.stdout.on('data', function(data){
	console.log(data.toString());
});

// Check to see when the cild process exits
child_process.on('close', function(){
	console.log("CLOSED!");
	process.exit();
});

// Writing Standard Input here will not stop the child process. You need to input into the child process
// Here we do this after 3 seconds
setInterval(function() {
child_process.stdin.write("Test");

}, 3000)
