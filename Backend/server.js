const express = require("express");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../Frontend/public")));

// Serve index.html explicitly for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/public/index.html"));
});

// Store users per room
const users = {};

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle join room
  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);

    // Save user in memory
    if (!users[room]) users[room] = [];
    users[room].push({ id: socket.id, username });

    // Notify room
    socket.to(room).emit("message", `${username} joined ${room} room`);

    // Update user list
    io.to(room).emit("roomUsers", users[room]);
  });

  // Handle chat message
  socket.on("chatMessage", ({ room, msg, username }) => {
    io.to(room).emit("message", `${username}: ${msg}`);
  });

  // Handle disconnect
  socket.on("disconnect", () => {
    for (const room in users) {
      const index = users[room].findIndex((u) => u.id === socket.id);
      if (index !== -1) {
        const username = users[room][index].username;
        users[room].splice(index, 1);

        // Notify room
        io.to(room).emit("message", `${username} left the room`);
        io.to(room).emit("roomUsers", users[room]);
      }
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
