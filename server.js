const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let users = {}; // username -> socket.id
let sockets = {}; // socket.id -> username
let messages = {}; // key = 'userA|userB' -> array of message objects

function getChatKey(u1, u2) {
  return [u1, u2].sort().join("|");
}

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/style.css", (req, res) => res.sendFile(path.join(__dirname, "style.css")));
app.get("/socket.io.js", (req, res) =>
  res.sendFile(path.join(__dirname, "node_modules/socket.io/client-dist/socket.io.js"))
);

io.on("connection", (socket) => {
  console.log("New connection: " + socket.id);

  socket.on("register", (username) => {
    users[username] = socket.id;
    sockets[socket.id] = username;
    io.emit("user-list", Object.keys(users));
  });

  socket.on("private-message", (msg) => {
    const { from, to, message, msgId } = msg;
    const key = getChatKey(from, to);
    if (!messages[key]) messages[key] = [];
    messages[key].push({ from, message, msgId });

    // send only to recipient
    if (users[to]) {
      io.to(users[to]).emit("private-message", msg);
    }
  });

  socket.on("load-history", ({ withUser }) => {
    const from = sockets[socket.id];
    const key = getChatKey(from, withUser);
    if (messages[key]) {
      const chatHistory = messages[key].filter(
        (m) => m.from === from || m.from === withUser
      );
      io.to(socket.id).emit("load-history", chatHistory);
    }
  });

  socket.on("disconnect", () => {
    const username = sockets[socket.id];
    delete users[username];
    delete sockets[socket.id];
    io.emit("user-list", Object.keys(users));
    console.log(`User disconnected: ${username}`);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
