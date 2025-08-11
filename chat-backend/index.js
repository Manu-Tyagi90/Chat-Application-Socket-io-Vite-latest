const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "https://vercel.com/manu-tyagi90s-projects/my-chat-app/13aTM2ZwAUYQ2wc1m4L8z8TBoXdZ", // your deployed frontend
      "http://localhost:5173"             // for local dev
    ],
    methods: ["GET", "POST"]
  }
});

// Shared state
const roomMessages = {}; 
const onlineUsers = {};  
const rooms = new Set(["General"]); // Default room

// Import handlers
const roomHandlers = require("./handlers/rooms");
const messageHandlers = require("./handlers/messages");
const userHandlers = require("./handlers/users");
const typingHandlers = require("./handlers/typing"); // <-- Add this line

io.on("connection", (socket) => {
  roomHandlers(io, socket, roomMessages, rooms);
  messageHandlers(io, socket, roomMessages);
  userHandlers(io, socket, onlineUsers, rooms);
  typingHandlers(io, socket); // <-- Add this line
  // Add more handlers as needed
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:${PORT}/`);
});