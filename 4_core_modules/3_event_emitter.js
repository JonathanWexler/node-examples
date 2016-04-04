// First we can require the events library and immediately create a variable for the emitter
var EventEmitter = require('events').EventEmitter;
// To have the Person inherit from EventEmitter, we need util
var util = require('util');

// We can create our custom object
var Person = function (name) {
	this.name = name;
};


// This allows the Person object to act as a listener and emitter
util.inherits(Person, EventEmitter);

var p = new Person("Jon");

// Now we can respond to custom events, like a wave
p.on('waves', function(adverb){
	console.log(`${p.name} is waving ${adverb}`);
})

// And we can also invoke custom events
p.emit('waves', "happily");