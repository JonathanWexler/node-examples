// This code will run on the client side. So we can define methods that will help us interact with user input

// The functions can run regardless of connection to websockets, but if we want an open connection we need to define it here for Browsers that support websockets
var ws = new WebSocket("ws://localhost:3000");

// Now with a defined connection to our websocket we can run code upon successful connections or closing of the server
// When the websocket opens
ws.onopen = function (argument) {
  // Change the title with the title function below
  changeTitle("Connected!");
}

// When the websocket connection closes
ws.onclose = function (argument) {
  // Change the title with the title function below
  changeTitle("Disconnected!");
}

ws.onmessage = function(data) {
  // This will listen for incoming data and append it usig our addMessage function
  addMessage(data.data); 
};

// This function will listen for form submission and pull the text the user typed
document.forms[0].onsubmit = function(){
  var data = document.getElementById('message');
  // Before data is cleared, send it to broadcast to all clients
  ws.send(data.value);
  data.value = '';
};

// This function will change the title of the page
function changeTitle (title) {
  document.querySelector('h1').innerHTML = title;
}

// This function will add the message to the main chat box
function addMessage (message) {
  var p_elem = document.createElement('p');
  p_elem.innerText = message;
  document.querySelector('div.data').appendChild(p_elem);
}