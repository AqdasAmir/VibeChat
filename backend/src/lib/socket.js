import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: [ENV.CLIENT_URL],
        credentials: true,
    }
});

io.use(socketAuthMiddleware);

// we will use this function to check if the user is online or not, by checking if the userId exists in the userSocketMap
export function getRecieverSocketId(userId){
    return userSocketMap[userId];
};

//store online users in memory
const userSocketMap = {}; // { userId: socketId }

io.on("connection", (socket) => {
    console.log("A new user connected: ", socket.user.fullName);

    const userId = socket.userId;
    userSocketMap[userId] = socket.id;

    //io.emit() is used to send a message to all connected clients, including the sender. In this case, it sends an event named "getOnlineUsers" with the payload being an array of user IDs that are currently online (the keys of the userSocketMap).
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected: ", socket.user.fullName);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { io, app, server };