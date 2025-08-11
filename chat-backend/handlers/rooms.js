// chat-backend/handlers/rooms.js
const userRooms = {}; // { username: Set<string> }

module.exports = (io, socket, roomMessages, rooms) => {
  socket.on("create_room", (room) => {
    rooms.add(room);
    io.emit("room_list", Array.from(rooms));
  });

  socket.on("join_room", ({ username, room }) => {
    const before = io.sockets.adapter.rooms.get(room)?.size || 0;
    console.log(`[join_room] ${username} joining ${room}. members(before)=${before}`);

    socket.join(room);

    if (!userRooms[username]) userRooms[username] = new Set();
    const alreadyInRoom = userRooms[username].has(room);
    userRooms[username].add(room);

    socket.emit("room_message_history", {
      room,
      messages: roomMessages[room] || []
    });

    const after = io.sockets.adapter.rooms.get(room)?.size || 0;
    console.log(`[join_room] ${username} joined ${room}. members(after)=${after}`);

    if (!alreadyInRoom) {
      socket.to(room).emit("receive_message", {
        room,
        message: {
          username: "System",
          content: `${username} joined the room.`,
          timestamp: new Date().toISOString(),
          seenBy: [],
        }
      });
    }
  });

  socket.on("leave_room", ({ username, room }) => {
    const before = io.sockets.adapter.rooms.get(room)?.size || 0;
    console.log(`[leave_room] ${username} leaving ${room}. members(before)=${before}`);

    socket.leave(room);
    if (userRooms[username]) userRooms[username].delete(room);

    const after = io.sockets.adapter.rooms.get(room)?.size || 0;
    console.log(`[leave_room] ${username} left ${room}. members(after)=${after}`);

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