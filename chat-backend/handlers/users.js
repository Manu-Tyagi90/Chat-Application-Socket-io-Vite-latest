module.exports = (io, socket, onlineUsers, rooms) => {
  socket.on("join", (username) => {
    onlineUsers[username] = socket.id;
    io.emit("online_users", Object.keys(onlineUsers));
    io.emit("room_list", Array.from(rooms));
  });

  socket.on("disconnect", () => {
    for (const [username, id] of Object.entries(onlineUsers)) {
      if (id === socket.id) {
        delete onlineUsers[username];
        break;
      }
    }
    io.emit("online_users", Object.keys(onlineUsers));
  });
};