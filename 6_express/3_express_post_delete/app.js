// app.js
// Let's first require the necessary modules
var express = require('express');
// Also ass CORS
var cors = require('cors');
// And body-parser to parse responses
var body_parser = require('body-parser');

// Now let's set up the app from an Express instance
var app = express();

// With app we can now setup basic server functionality
// Handle all requests
app.use(function (req, res, next) {
  console.log(`REQUEST was for ${req.url}`);
  next();
});

// Serve static assets from public folder
app.use(express.static('./public'));

// Add body-parser as a tool for incoming requests
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

// Add cross origin resource sharing
app.use(cors());

// Some basic data
var data =[
  {
    name: "Jon",
    location: "Philadelphia"
  },
  {
    name: "Sam",
    location: "Chicago"
  },
  {
    name: "Anna",
    location: "New York"
  }
];

// We can now make requests and expect basic html, but if we want specific data responses we need ajax calls to api endpoints on on the server, to which we can respond
app.get('/api/data', function(req, res){
  // return our hardcoded data
  res.json(data);
});

// handle post requests to the following url
// Posting will happen throguh ajax
app.post('/api/post', function(req, res){
  // print out parsed data from this route request and add to temp data
  console.log(data.push(req.body));
  res.json(data);
});

// Start server
app.listen(4040);
// Console message
console.log(`Server running on 4040`);
