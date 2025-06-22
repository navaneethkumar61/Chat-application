# 🗨️ 1-to-1 Real-Time Chat App

Live Demo: https://chat-application-s7zn.onrender.com/
- A simple real-time private chat application with emoji support and message deletion, built using:

## 🚀 Technologies Used
- HTML
- CSS
- JavaScript (frontend)
- Node.js (backend)
- Express.js (server)
- Socket.IO (real-time communication)
- emoji-picker-element (emoji support)

---

## 🖥️ How to Run on a Single Laptop (Localhost)

1. **Install Node.js**: https://nodejs.org
2. **Download or Clone this Repository**:
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start the Server**:
   ```bash
   node server.js
   ```
5. **Open Browser**: Visit `http://localhost:3000`
6. **Simulate Multiple Users**: Open multiple browser tabs or incognito windows

---

## 🌐 How to Run on Two Laptops (Same Network)

### On Laptop A (Host):
1. Run the server:
   ```bash
   node server.js
   ```
2. Find your IP:
   ```bash
   ipconfig       # Windows
   ifconfig       # macOS/Linux
   ```
   Example: `IPv4 Address: 10.1.83.70`
3. Share the link:
   ```
   http://10.1.83.70:3000
   ```

### On Laptop B (Client):
1. Connect to the **same Wi-Fi** (e.g., SRMAP)
2. Open browser:
   ```
   http://10.1.83.70:3000
   ```
3. Start chatting 🎉

---

## ✨ Features
- Real-time 1-to-1 private chat
- Emoji support (emoji-picker-element)
- Message deletion:
  - Sender can delete their own message (visible only to them)
  - Receiver can delete received messages (visible only to them)
- Responsive UI with user-friendly layout

---

## 📁 Project Structure
```
├── index.html        # Chat frontend
├── style.css         # UI styles
├── server.js         # Node.js + Socket.IO backend
├── package.json      # Node project config
└── README.md         # Documentation
```

---

## 📌 Notes
- Both users must be connected to the **same Wi-Fi** if using locally.
- For internet-wide access, deploy using **Render**, **Railway**, or **Glitch**.

---

## 📄 License
MIT License – free to use and customize.
