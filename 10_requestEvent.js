const http = require("http");

// Using Event Emitter API
const server = http.createServer();
// subcribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(3000);
