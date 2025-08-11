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
      "http://localhost:5173", // local dev
      "https://my-chat-app-gamma.vercel.app",
      "https://my-chat-app-git-master-manu-tyagi90s-projects.vercel.app",
      "https://my-chat-9cjaz9iei-manu-tyagi90s-projects.vercel.app"
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