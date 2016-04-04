// Once we require the path library
var path = require('path');

// We can pull the basename of a file
console.log(path.basename(__filename));

// Or concatinate new paths with join
var newPath = path.join(__dirname, "project", "jon");
console.log(newPath);

// We can also work with the utilities module
var util = require('util');

// Util also lets us log data but with more information
util.log(newPath);

// We also have a library that deals with memory called v8
var v8 = require('v8');
// v8 can let us see the heap memory information
util.log(v8.getHeapStatistics());