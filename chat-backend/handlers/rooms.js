module.exports = (io, socket, roomMessages, rooms) => {
  socket.on("create_room", (room) => {
    rooms.add(room);
    io.emit("room_list", Array.from(rooms));
  });

  socket.on("join_room", ({ username, room }) => {
    socket.join(room);
    socket.emit("room_message_history", {
      room,
      messages: roomMessages[room] || []
    });
    socket.to(room).emit("receive_message", {
      room,
      message: {
        username: "System",
        content: `${username} joined the room.`,
        timestamp: new Date().toISOString(),
        seenBy: [],
      }
    });
  });

  socket.on("leave_room", ({ username, room }) => {
    socket.leave(room);
    socket.to(room).emit("receive_message", {
      room,
      message: {
        username: "System",
        content: `${username} left the room.`,
        timestamp: new Date().toISOString(),
        seenBy: [],
      }
    });
  });
};