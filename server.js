const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from public/
app.use(express.static("public"));

// When a client connects
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for chat messages
  socket.on("chatMessage", (msg) => {
    console.log("Message: " + msg);

    // Broadcast message to all connected clients
    io.emit("chatMessage", msg);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
