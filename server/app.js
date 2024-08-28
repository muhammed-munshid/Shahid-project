import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import connection from './config/dbConfig.js';

dotenv.config();
connection();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",  // Allow all origins, adjust as needed
    methods: ["GET", "POST"]
  }
});


// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use((req, res, next) => {
  req.io = io; // Attach Socket.IO to request object
  next();
});

app.use('/', userRoute);


// Sample route
app.get('/', (req, res) => {
    res.send('Chat App is running');
});

// Combined Socket.io connection
io.on('connection', (socket) => {
  socket.on('joinRoom', (userId) => {
    socket.join(userId);
  });

  socket.on('leaveRoom', (userId) => {
    socket.leave(userId);
  });
});


// Start the server
const PORT = process.env.PORT
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
