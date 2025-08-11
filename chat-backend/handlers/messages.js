// chat-backend/handlers/messages.js
module.exports = (io, socket, roomMessages) => {
  socket.on("send_room_message", ({ room, message }) => {
    if (!roomMessages[room]) roomMessages[room] = [];
    if (!message.seenBy) message.seenBy = [message.username];
    roomMessages[room].push(message);

    // Broadcast to everyone in the room (including sender)
    io.to(room).emit("receive_message", { room, message });
  });

  socket.on("seen", ({ room, username }) => {
    if (!roomMessages[room]) return;
    roomMessages[room].forEach(msg => {
      if (!msg.seenBy) msg.seenBy = [];
      if (!msg.seenBy.includes(username)) {
        msg.seenBy.push(username);
      }
    });
    io.to(room).emit("seen_update", { room, seenBy: username });
  });
};