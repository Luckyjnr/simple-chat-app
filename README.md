
```md
# 🗨️ Simple Chat App – Rooms & User List

## 📌 Description
A **real-time chat application** built with **Node.js**, **Express**, and **Socket.IO**.  
This version extends the mini chat app into a **room-based system** where users can:

- Enter a username
- Join specific rooms (General, Sports, Tech)
- Send and receive messages instantly with others in the same room
- See who is currently online in their room
- Get notifications when someone joins or leaves

---

## ✨ Features
- Real-time messaging with **Socket.IO**
- Create and join rooms dynamically
- Broadcast join/leave events within a room
- Display a live user list per room
- Basic styling for messages, chat box, and user list
- Lightweight (no database required)

---

## 📂 Project Structure
```

simple-chat-app/
│── server.js          # Express + Socket.IO server
│── package.json
└── public/
├── index.html     # Frontend with room + username selection
├── client.js      # Client-side Socket.IO logic
└── style.css      # Styling for chat box and user list

````

---

## 🚀 Installation & Usage
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/simple-chat-app.git

# Navigate into folder
cd simple-chat-app

# Install dependencies
npm install

# Start the app
node server.js
````

Open your browser and visit:
👉 [http://localhost:3000](http://localhost:3000)

---

## 💬 How to Use

1. Enter a **username** in the join screen.
2. Select a **room** (General, Sports, or Tech).
3. Start chatting with others in the same room!
4. When new users join or leave, all room members get a notification.
5. The **user list** updates in real time.

---

## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/) – JavaScript runtime
* [Express](https://expressjs.com/) – Web framework
* [Socket.IO](https://socket.io/) – Real-time communication

---

## 🗺️ Next Steps (Optional Enhancements)

* Add private messaging (DMs)
* Persist chat history with a database (MongoDB)
* Improve UI/UX with modern frontend framework (React, Vue)
* Deploy to Heroku/Render for live testing

---

## 👨‍💻 Author

**Noah Lucky**