import express from "express";
import { getAllContacts, getMessagesByUserId, sendMessage, getChatPatrners } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// the middleware will run before any of the routes in this router, ensuring that all routes are protected and have arcjet protection applied
router.use( arcjetProtection,protectRoute); // Apply authentication middleware to all routes in this router

router.get("/contact", getAllContacts); 
router.get("/chats", getChatPatrners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);


export default router;