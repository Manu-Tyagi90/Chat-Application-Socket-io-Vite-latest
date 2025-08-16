# 🚀 ChatConnect - Real-Time Chat Application

<div align="center">
<img height="400" alt="ChatConnect Mobile Demo" src="https://github.com/user-attachments/assets/718991f6-3dfe-445a-8c8a-8e6a11c4cbe5" />
<img height="400" alt="ChatConnect Desktop Demo" src="https://github.com/user-attachments/assets/65e3c951-ecf3-47c4-b371-2f8933d2c2bc" />
</div>
<div align="center">


![ChatConnect Logo](https://img.shields.io/badge/ChatConnect-Real--Time%20Chat-25d366?style=for-the-badge&logo=whatsapp&logoColor=white)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Online-brightgreen?style=for-the-badge)](https://my-chat-app-gamma.vercel.app)
[![Backend API](https://img.shields.io/badge/🔗_Backend_API-Active-blue?style=for-the-badge)](https://chat-application-socket-io-vite-latest.onrender.com)

**A modern, feature-rich real-time chat application built with React, TypeScript, and Socket.IO**

[🎯 Try Live Demo](https://my-chat-app-gamma.vercel.app) • [📖 Documentation](#-features) • [🚀 Quick Start](#-quick-start)

</div>

---


## 🌟 Overview

ChatConnect is a WhatsApp-inspired real-time chat application that brings people together through instant messaging. Built with modern web technologies, it offers a seamless chatting experience with beautiful UI/UX and powerful real-time features.

<div align="center">
  

https://github.com/user-attachments/assets/04c6bce5-a729-40a4-bf96-3078342da125


ChatConnect in action - Real-time messaging demo

</div>

### 🎯 Why ChatConnect?

- **🚀 Lightning Fast** - Real-time messaging with Socket.IO
- **🎨 Beautiful Design** - WhatsApp-inspired Material-UI interface
- **📱 Responsive** - Works perfectly on all devices
- **🔒 Reliable** - Built with TypeScript for type safety
- **⚡ Modern Stack** - Latest React, Vite, and Node.js technologies

---

## ✨ Features

### 🔥 Core Features
- **💬 Real-time Messaging** - Instant message delivery and reception
- **🏠 Multiple Chat Rooms** - Create and join different conversation rooms
- **👥 Online User Tracking** - See who's currently online
- **⌨️ Typing Indicators** - Know when someone is typing
- **✅ Read Receipts** - Message delivery and read status
- **📱 Responsive Design** - Perfect on desktop, tablet, and mobile

### 🎨 Enhanced UI/UX
- **🎭 Emoji Picker** - Express yourself with a wide range of emojis
- **🌙 Theme Support** - Light/Dark mode with custom themes
- **📏 Font Size Control** - Adjustable text sizes for better readability
- **🎯 Compact Mode** - Space-efficient layout option
- **✨ Message Animations** - Smooth transitions and effects
- **🔔 Desktop Notifications** - Never miss important messages

### 🛠️ Advanced Features
- **📎 File Attachment UI** - Ready for file sharing (coming soon)
- **⚙️ User Settings** - Customizable chat experience
- **🎨 Message Bubbles** - WhatsApp-style conversation layout
- **📅 Date Separators** - Clear message organization by date
- **👤 User Avatars** - Colorful, auto-generated user avatars
- **🔄 Message Grouping** - Smart message clustering for better readability

### 🚀 Technical Features
- **⚡ Optimized Performance** - Efficient message handling and rendering
- **🔧 Error Boundaries** - Graceful error handling
- **💾 Local Storage** - Settings persistence
- **🎯 TypeScript** - Full type safety throughout the application
- **📦 Modular Architecture** - Clean, maintainable codebase

---

## 🏗️ Project Architecture

```
📁 Chat APP (ReactJS + TS)/
├── 🎨 frontend/ (my-chat-app/)
│   ├── 📱 src/
│   │   ├── 🧩 components/
│   │   │   ├── chat/
│   │   │   │   ├── ChatHeader.tsx
│   │   │   │   ├── ChatContent.tsx
│   │   │   │   ├── MessageList.tsx
│   │   │   │   └── MessageInput.tsx
│   │   │   └── Settings.tsx
│   │   ├── 🎣 hooks/
│   │   │   ├── useChatSocket.ts
│   │   │   ├── useChatMessages.ts
│   │   │   ├── useRoomManagement.ts
│   │   │   └── useSettings.ts
│   │   ├── 🌐 context/
│   │   │   └── UserContext.tsx
│   │   ├── 📄 pages/
│   │   │   ├── LoginPage.tsx
│   │   │   └── ChatPage.tsx
│   │   ├── 🔧 services/
│   │   │   └── socket.ts
│   │   ├── 🎨 utils/
│   │   │   └── userColor.ts
│   │   └── 📝 types/
│   │       └── message.ts
│   ├── 📦 package.json
│   └── ⚙️ vite.config.ts
├── 🖥️ chat-backend/
│   ├── 📡 index.js
│   └── 📦 package.json
└── 📖 README.md
```

---

## 🚀 Quick Start

### 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Manu-Tyagi90/Chat-Application-Socket-io-Vite-latest.git
cd "Chat APP (ReactJS + TS)"
```

### 2️⃣ Start the Backend Server

```bash
cd chat-backend
npm install
npm start
```

🌐 **Backend runs on:** [http://localhost:3000](http://localhost:3000)

### 3️⃣ Start the Frontend Application

```bash
cd ../frontend
npm install
npm run dev
```

🎨 **Frontend runs on:** [http://localhost:5173](http://localhost:5173)

### 4️⃣ Open Your Browser

Navigate to [http://localhost:5173](http://localhost:5173) and start chatting! 🎉

---

## 🌐 Live Deployment

### 🔗 Live URLs

- **🎨 Frontend:** [https://my-chat-app-gamma.vercel.app](https://my-chat-app-gamma.vercel.app)
- **🖥️ Backend:** [https://chat-application-socket-io-vite-latest.onrender.com](https://chat-application-socket-io-vite-latest.onrender.com)

### 🚀 Deployment Platforms

- **Frontend:** Deployed on [Vercel](https://vercel.com/) for lightning-fast performance
- **Backend:** Deployed on [Render](https://render.com/) for reliable server hosting

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

---

## 📸 Screenshots

<div align="center">

### 🔐 Login Page
*Beautiful, gradient-based login interface*

### 💬 Chat Interface
*WhatsApp-inspired chat layout with real-time messaging*

### ⚙️ Settings Panel
*Comprehensive customization options*

### 📱 Mobile Responsive
*Perfect experience on all devices*

</div>

---

## 🔧 Configuration

### Frontend Socket Configuration

Update `src/services/socket.ts` for production:

```typescript
import io from "socket.io-client";

export const socket = io("https://chat-application-socket-io-vite-latest.onrender.com", {
  autoConnect: false,
  transports: ['websocket', 'polling']
});
```

### Backend CORS Configuration

Update `index.js` for production:

```javascript
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://my-chat-app-gamma.vercel.app",
      "https://my-chat-app-git-master-manu-tyagi90s-projects.vercel.app",
      "https://my-chat-9cjaz9iei-manu-tyagi90s-projects.vercel.app"
    ],
    methods: ["GET", "POST"],
    credentials: true
  }
});
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **💾 Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **📤 Push** to the branch (`git push origin feature/amazing-feature`)
5. **🔄 Open** a Pull Request

### 🐛 Bug Reports

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📈 Roadmap

### 🔜 Coming Soon
- [ ] **📎 File Sharing** - Send images, documents, and media
- [ ] **🔍 Message Search** - Find messages quickly
- [ ] **👤 User Profiles** - Customizable user information
- [ ] **🔐 Private Messaging** - One-on-one conversations
- [ ] **📞 Voice Messages** - Audio message support
- [ ] **🌍 Internationalization** - Multi-language support

### 🎯 Future Enhancements
- [ ] **📹 Video Calls** - Integrated video calling
- [ ] **🤖 Bot Integration** - Chatbot support
- [ ] **📊 Analytics Dashboard** - Usage statistics
- [ ] **🔒 End-to-End Encryption** - Enhanced security
- [ ] **☁️ Cloud Storage** - Message backup and sync

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

<div align="center">

**Special thanks to the amazing open-source community!**

[![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

</div>

---

## 📞 Contact & Support

<div align="center">

**Questions? Suggestions? We'd love to hear from you!**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Manu-Tyagi90)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thoughtful-manu/)

**⭐ If you found this project helpful, please give it a star!**

</div>

---

<div align="center">

**Made with ❤️ by [Manu Tyagi](https://github.com/Manu-Tyagi90)**

*Building the future of real-time communication, one message at a time.*

</div>
