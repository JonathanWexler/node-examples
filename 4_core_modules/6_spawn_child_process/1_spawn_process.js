// You can have a basic process that occurs after a specified time interval
// Spawn is later used to evaluate this process

// Print a number every second
setInterval(function(){
	process.stdout.write("Hello");
}, 1000);

process.stdin.on('data', function(){
	console.log("ENDED");
	process.exit();
});