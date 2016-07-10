// First need to require the websockets module and instantiate a server
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3000});

// Now we can set up event listeners for when a connection is made to the 
wss.on("connection", function (socket) {
  // The ws module Server has some methods that allow us to interact through the open connection. When a connection is made we can send a repsonse
  socket.send("You've connected.")
  var text = "";
  for(p in socket){
    text += `| ${p} : ${socket[p]} |`
  }
  console.log(`${text} has connected!`)
  // We can listen within this connection for data transfer
  socket.on("message", function (data) {
    // Now check what the message is
    if (data === 'exit') {
      // Close that individual's connection
      socket.close();
    }else{
      // Otherwise broadcast to all other clients
      // First find those other clients
      wss.clients.forEach(function (single_client) {
        // send a message to each client
        single_client.send(data);
      })
    }
  })
})