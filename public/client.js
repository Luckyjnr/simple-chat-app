const socket = io();

const joinScreen = document.getElementById("join-screen");
const chatScreen = document.getElementById("chat-screen");
const joinBtn = document.getElementById("joinBtn");
const usernameInput = document.getElementById("username");
const roomSelect = document.getElementById("room");
const roomName = document.getElementById("roomName");

const form = document.getElementById("chatForm");
const input = document.getElementById("msgInput");
const messages = document.getElementById("messages");
const usersList = document.getElementById("users");

let username = "";
let room = "";

// Join room
joinBtn.addEventListener("click", () => {
  username = usernameInput.value.trim();
  room = roomSelect.value;

  if (!username) return alert("Please enter a username");

  socket.emit("joinRoom", { username, room });

  joinScreen.style.display = "none";
  chatScreen.style.display = "block";
  roomName.textContent = `Room: ${room}`;
});

// Send message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chatMessage", { room, msg: input.value, username });
    input.value = "";
  }
});

// Receive message
socket.on("message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
});

// Update user list
socket.on("roomUsers", (users) => {
  usersList.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = u.username;
    usersList.appendChild(li);
  });
});
