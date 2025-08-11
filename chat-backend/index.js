const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Shared state
const roomMessages = {}; // { roomName: [messages] }
const onlineUsers = {};  // { username: socket.id }
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