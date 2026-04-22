import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const socketAuthMiddleware = async (socket, next) => {
    try {
        // Get the token from http-only cookie
        const token = socket.handshake.headers.cookie?.split('; ').find((row) => row.startsWith('jwt='))?.split('=')[1];

        if (!token) {
            console.log("Soket authentication failed: No token provided");
            return next(new Error('Authentication error: No token provided'));
        }
            // Verify the token
            const decoded = jwt.verify(token, ENV.JWT_SECRET);
            if (!decoded) {
                console.log("Soket authentication failed: Invalid token");
                return next(new Error('Authentication error: Invalid token'));
            }

            const user = await User.findById(decoded.userId).select('-password');
            if (!user) {
                console.log("Soket authentication failed: User not found");
                return next(new Error('Authentication error: User not found'));
            }

            // Attach user information to the socket object
            socket.user = user;
            socket.userId = user._id.toString();

            console.log(`Socket authenticated successfully for user: ${user.fullName} (${user._id})`);

            next();
        
    } catch (error) {
        console.error("Socket authentication error:", error);
        next(new Error('Authentication error: ' + error.message));
    }
}