// To read files from the filesystem we need the fs module
var fs = require('fs');

// Now we can use the filesystem library to read from a directory (or create, delete, or change directories or files) synchronously or asynchronously
var files = fs.readdirSync('./4_modules')
// Above will read the files from the specified directory synchronously, and return those values we can print
console.log(files);