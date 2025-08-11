module.exports = (io, socket, roomMessages) => {
  socket.on("send_room_message", ({ room, message }) => {
    if (!roomMessages[room]) roomMessages[room] = [];
    if (!message.seenBy) message.seenBy = [message.username];
    roomMessages[room].push(message);
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

  // Private chat (optional, if you want to keep it)
  socket.on("private_message", ({ to, from, content, timestamp }) => {
    // You can add private chat logic here if needed
  });
};