// Here we have the same code as the previous lesson. However, this file now contains our code in a module.

// To import the module locally:
var Person = require('./Person');

var p = new Person("Jon");

// Now we can respond to custom events, like a wave
p.on('waves', function(adverb){
	console.log(`${p.name} is waving ${adverb}`);
})

// And we can also invoke custom events
p.emit('waves', "happily");