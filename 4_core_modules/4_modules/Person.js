// Here we have the same code as the previous lesson. However, this file now contains our code in a module.

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

// To make this module public
module.exports = Person;
