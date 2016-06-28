// Add express to our app
var express = require ('express');
// instantiate express here
var app = express();
// Import CORS for cross origin resource sharing
var cors = require('cors');

// Sample list of fruit and their colors
var fruit =[
      {
        name: 'apple',
        color: 'red'
      },
      {
        name: 'pear',
        color: 'green'
      },
      {
        name: 'banana',
        color: 'yellow'
      }
]

// Handle basic responses of all types
app.use(function(req, res, next){
  // let us know what url was requested
  console.log(`request is to ${req.url}!`);
  // call he next function:
  next();
})

// also invoke express static middleware
app.use(express.static('./public'));

// add cors so the following resources can be accessed outside of this domain
app.use(cors());

// Once we have the above ready to handle basic resources we can create a route for a specific url here:
app.use('/data-json', function (req, res) {
  // return data as json
  res.json(fruit);
})
// Tell app what port to listen on
app.listen(3000);
// Message to let us know things are working
console.log("SERVER IS RUNNING");