import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import connection from './config/dbConfig.js';
import messageModel from './models/messageModel.js';

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
app.use('/', userRoute);

// Sample route
app.get('/', (req, res) => {
    res.send('Chat App is running');
});

// Combined Socket.io connection
io.on('connection', async (socket) => {
    console.log('A user connected: ' + socket.id);

    // Load and send previous messages to the newly connected client
    const messages = await messageModel.find().sort('timestamp');
    socket.emit('loadMessages', messages);

    // Listening for new messages from clients
    socket.on('chatMessage', async (msg) => {
        // const message = new messageModel({ user: socket.id, message: msg });
        // await message.save();

        // Emit to all clients including the sender
        io.emit('chatMessage', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });
});

// Start the server
const PORT = process.env.PORT
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
