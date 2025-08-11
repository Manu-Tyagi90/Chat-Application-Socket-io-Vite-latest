module.exports = (io, socket) => {
  socket.on("typing", ({ room, username }) => {
    socket.to(room).emit("user_typing", username);
  });

  socket.on("stop_typing", ({ room, username }) => {
    socket.to(room).emit("user_stop_typing", username);
  });
};