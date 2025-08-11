# Chat Application (ReactJS + TypeScript + Socket.IO)

A real-time group chat app with rooms, typing indicators, read receipts, and more.

## 🚀 Live Demo

- **Frontend:** [https://my-chat-app-gamma.vercel.app](https://my-chat-app-gamma.vercel.app)
- **Backend:** [https://chat-application-socket-io-vite-latest.onrender.com](https://chat-application-socket-io-vite-latest.onrender.com)

## Chat Application

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Online-brightgreen?style=for-the-badge&logo=vercel)](https://my-chat-app-gamma.vercel.app)

## 🚀 Try it now:  
👉 [https://my-chat-app-gamma.vercel.app](https://my-chat-app-gamma.vercel.app)

## 🗂️ Project Structure

```
Chat APP (ReactJS + TS)/
├── frontend/ (or my-chat-app/)   # Vite + React + TypeScript
├── chat-backend/                 # Node.js + Express + Socket.IO
├── .gitignore
└── README.md
```

---

## 🛠️ Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/Manu-Tyagi90/Chat-Application-Socket-io-Vite-latest.git
cd "Chat APP (ReactJS + TS)"
```

### 2. Start the Backend

```bash
cd chat-backend
npm install
node index.js
```

- The backend will run on [http://localhost:3000](http://localhost:3000)

### 3. Start the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

- The frontend will run on [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com/)
- **Backend:** Deployed on [Render](https://render.com/)

### Update the frontend’s `src/services/socket.ts` to use the deployed backend URL:

```ts
import io from "socket.io-client";
export const socket = io("https://chat-application-socket-io-vite-latest.onrender.com", {
  autoConnect: false,
});
```

### Update backend CORS in `index.js`:

```js
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://my-chat-app-gamma.vercel.app",
      "https://my-chat-app-git-master-manu-tyagi90s-projects.vercel.app",
      "https://my-chat-9cjaz9iei-manu-tyagi90s-projects.vercel.app"
    ],
    methods: ["GET", "POST"]
  }
});
```

---

## ✨ Features

- Group chat with multiple rooms
- Typing indicator (per room)
- Read receipts
- Online users
- Modular, scalable codebase

---

## 📦 Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express, Socket.IO

---

## 📝 License

MIT

---

## 🙏 Special Thanks

- [Socket.IO](https://socket.io/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)


