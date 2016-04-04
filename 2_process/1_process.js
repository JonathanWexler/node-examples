// First we can print out the contents of process.argv
console.log(process.argv);
// we get [ '/usr/local/bin/node', '/Users/Jon/Desktop/node_problems/process/process.js' ]

// After running the file again as node process.js --user Jon --greeting “Hello There!” 
// We get [ '/usr/local/bin/node',
  // '/Users/Jon/Desktop/node_problems/process/process.js',
  // '--user',
  // 'Jon',
  // '--greeting',
  // 'Hello There!' ]


// Here this function takes in a flag argument
// we then use indexOf to find where in the array that value is located
// If there is no value, we return null, otherwise we return the following value in the array
  function grab(flag){
  	var index = process.argv.indexOf(flag);
  	return (index === -1) ? null : process.argv[index+1];
  }

// To test this we can create variables
var greeting = grab('--greeting');
var user = grab('--user');

// Here we can log some information depending on what information we get from the flags
if (!user || !greeting) {
	console.log("NO INFORMATION");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
};