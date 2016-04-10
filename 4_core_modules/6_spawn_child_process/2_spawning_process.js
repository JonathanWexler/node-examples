// Now, to use spawn we can call the other file to run as a child process and pay attention to its output
var spawn = require('child_process').spawn;

// Like exec, this is how spawn invokes another process
var child_process = spawn('node', ['1_spawn_process.js']);

child_process.stdout.on('data', function(data){
	console.log(data.toString());
});