// Creating a variable will not make it global with node, like it will in a browser console
var word = "Hello There!";

// In terminal this should give us undefined
console.log(global.word);

// If we remove the global namespace we can access the variable
console.log(word);

// To get a substring from the string we can use Slice()
var sub = word.slice(5);

// We can use the backticks to interpolate the string with a variable
console.log(`The second word is ${sub}`);

// To get the current directory path
console.log(__dirname);

// and to get the current path with the filename, we use
console.log(__filename);