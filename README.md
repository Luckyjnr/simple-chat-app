
# 🗨️ Simple Chat App

## 📌 Description
A **mini real-time chat application** built with **Node.js**, **Express**, and **Socket.IO**.  
This project demonstrates the basics of real-time communication where multiple users can connect to a server and exchange messages instantly.  

It’s the foundational version of a larger chat system — focused only on message broadcasting across all connected clients.

---

## ✨ Features
- Real-time messaging using **Socket.IO**.
- Simple UI with an input field and message list.
- Broadcast messages to all connected clients instantly.
- Lightweight setup — no database or user accounts (yet).
- Built for learning Socket.IO basics.

---

## 📂 Project Structure
```

simple-chat-app/
│── server.js          # Express + Socket.IO server
│── package.json
└── public/
├── index.html     # Frontend UI
└── client.js      # Socket.IO client-side logic

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

Now open your browser and visit:
👉 [http://localhost:3000](http://localhost:3000)

Open **two tabs** to test real-time chat between them.


## 🛠️ Technologies Used

* [Node.js](https://nodejs.org/) – JavaScript runtime
* [Express](https://expressjs.com/) – Web framework
* [Socket.IO](https://socket.io/) – Real-time communication

---

## 👨‍💻 Author

**Noah Lucky**

```