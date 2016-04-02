// To access tools to separate the filesystem path for us, we can use
// the path module that comes wth node
var path = require("path");

// Now we can call a method on the path module to pull only the filename
console.log(`The filename is: ${path.basename(__filename)}`);

// Run with 'node require_module'
