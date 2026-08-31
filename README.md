# VibeChat

![Node.js](https://img.shields.io/badge/Node.js-≥20.0-green?logo=node.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Express](https://img.shields.io/badge/Express-4.21-000000?logo=express)
![Socket.io](https://img.shields.io/badge/Socket.io-4.8-010101?logo=socket.io)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-13AA52?logo=mongodb)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)

## About the Project

**VibeChat** is a real-time messaging application built with modern web technologies, enabling instant communication between users with a smooth and responsive experience. It leverages WebSockets through Socket.io to provide seamless real-time messaging, user presence tracking, and dynamic online status updates. The application features a sleek, intuitive UI built with React and Tailwind CSS, backed by a robust Node.js/Express backend with MongoDB persistence.

## Key Features

- 🔐 **User Authentication** – Secure signup and login with JWT-based authentication
- 💬 **Real-Time Messaging** – Instant message delivery using WebSocket connections
- 👥 **Online Presence** – Live user status tracking and online/offline indicators
- 📸 **Image Sharing** – Send images with messages via Cloudinary integration
- ✉️ **Email Notifications** – Email-based alerts for user activities via Resend
- 🛡️ **Rate Limiting** – API protection against abuse using Arcjet
- 🎨 **Modern UI** – Beautiful, responsive interface with Tailwind CSS and DaisyUI
- 📱 **Responsive Design** – Optimized for desktop and mobile devices
- ⚡ **High Performance** – Vite-powered frontend with optimized build and HMR

## Tech Stack

### Frontend
- **Framework:** React 19.2
- **Build Tool:** Vite 8.0
- **Routing:** React Router 7.14
- **State Management:** Zustand 5.0
- **Styling:** Tailwind CSS 3.4, DaisyUI 4.12
- **UI Components:** Lucide React 1.8
- **Real-Time:** Socket.io-client 4.8
- **HTTP Client:** Axios 1.15
- **Notifications:** React Hot Toast 2.6

### Backend
- **Framework:** Express.js 4.21
- **Runtime:** Node.js ≥20.0
- **Real-Time Communication:** Socket.io 4.8
- **Database:** MongoDB with Mongoose ODM 8.10
- **Authentication:** JWT (jsonwebtoken 9.0), bcryptjs 2.4
- **Email Service:** Resend 6.0
- **Cloud Storage:** Cloudinary 2.5
- **Rate Limiting:** Arcjet 1.0.0-beta.10
- **Utilities:** Dotenv 16.4, CORS, Cookie Parser

### Database
- **MongoDB** – NoSQL database for storing users and messages

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** ≥20.0.0
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas connection string)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AqdasAmir/VibeChat.git
   cd ChatVibe
   ```

2. **Install dependencies for both backend and frontend**
   ```bash
   npm run build
   ```

### Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Create a `.env` file** in the `backend` directory with the required environment variables (see [Environment Variables](#environment-variables) section)

3. **Install backend dependencies** (if not already installed)
   ```bash
   npm install
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The backend will start on the port specified in your `.env` file (default: `3000`)

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install frontend dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The frontend will start on `http://localhost:5173` (Vite default)

### Running Both Servers

For local development, open two terminal instances:

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

### Production Build

To build the frontend for production:
```bash
cd frontend
npm run build
```

To start the production server (serves both backend and frontend):
```bash
npm start
```

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `3000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://user:password@cluster.mongodb.net/chatvibe` |
| `NODE_ENV` | Application environment | `development` or `production` |
| `JWT_SECRET` | Secret key for JWT token generation | `your_jwt_secret_key_here` |
| `CLIENT_URL` | Frontend client URL | `http://localhost:5173` (dev) or `https://your-domain.com` (prod) |
| `RESEND_API_KEY` | Resend API key for email notifications | `re_xxxxxxxxxxxxx` |
| `EMAIL_FROM` | Sender email address | `noreply@chatvibe.com` |
| `EMAIL_FROM_NAME` | Sender display name | `ChatVibe` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API key | `your_api_key` |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | `your_api_secret` |
| `ARCJET_KEY` | Arcjet rate limiting API key | `ajk_xxxxxxxxxxxxx` |
| `ARCJET_ENV` | Arcjet environment | `production` or `development` |

### Example `.env` File

```env
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/chatvibe
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_123456
CLIENT_URL=http://localhost:5173
RESEND_API_KEY=re_your_resend_api_key
EMAIL_FROM=noreply@chatvibe.com
EMAIL_FROM_NAME=ChatVibe
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
ARCJET_KEY=ajk_your_arcjet_key
ARCJET_ENV=development
```

## Usage

Once both the backend and frontend servers are running:

1. **Access the Application**
   - Open your browser and navigate to `http://localhost:5173`

2. **Create an Account**
   - Click on the "Sign Up" button
   - Enter your email, full name, and password
   - Submit to create your account

3. **Login**
   - Navigate to the Login page
   - Enter your credentials to log in

4. **Start Chatting**
   - View your contacts or search for users
   - Click on a contact to open a chat window
   - Type a message and press Enter or click Send
   - View real-time online status indicators for active users
   - Share images by uploading them with your messages

5. **Features in Action**
   - You'll see online status badges on user profiles
   - Receive instant message notifications
   - View message history with your contacts
   - Upload and share images in conversations

## API Reference

All API endpoints are prefixed with `/api`. Authentication is handled via JWT tokens sent in HTTP-only cookies. The following table documents all available endpoints:

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/auth/signup` | Register a new user account | ❌ No |
| `POST` | `/auth/login` | Authenticate user and receive JWT token | ❌ No |
| `POST` | `/auth/logout` | Logout and clear authentication token | ❌ No |
| `PUT` | `/auth/update-profile` | Update user profile information (name, profile picture) | ✅ Yes |
| `GET` | `/auth/check` | Verify authentication status and retrieve current user data | ✅ Yes |

### Messaging Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/messages/contacts` | Retrieve all available users to chat with | ✅ Yes |
| `GET` | `/messages/chats` | Get list of users with existing chat history | ✅ Yes |
| `GET` | `/messages/:id` | Fetch message history with a specific user | ✅ Yes |
| `POST` | `/messages/send/:id` | Send a message (text and/or image) to a user | ✅ Yes |


### Authentication Details

- All protected endpoints require a valid JWT token
- JWT tokens are automatically sent and stored in HTTP-only cookies
- If authentication fails, the server returns a `401 Unauthorized` response
- The `protectRoute` middleware validates tokens for all endpoints marked with ✅ Auth Required
- All auth and message endpoints have Arcjet rate limiting enabled to prevent abuse

## Project Structure

```
VibeChat/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Route handlers
│   │   ├── middleware/       # Express and Socket middleware
│   │   ├── models/           # Mongoose schemas
│   │   ├── routes/           # API route definitions
│   │   ├── lib/              # Utility modules (DB, Socket, Auth)
│   │   ├── emails/           # Email handling and templates
│   │   └── server.js         # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── store/            # Zustand state management
│   │   ├── lib/              # Utilities (Axios config)
│   │   ├── App.jsx           # Main app component
│   │   └── main.jsx          # Entry point
│   └── package.json
├── package.json              # Root package configuration
└── README.md
```

## Scripts

### Root Level
- `npm run build` – Install dependencies and build frontend
- `npm start` – Start the backend server in production mode

### Backend
- `npm run dev` – Start development server with nodemon
- `npm start` – Start production server

### Frontend
- `npm run dev` – Start Vite development server with HMR
- `npm run build` – Build optimized production bundle
- `npm run lint` – Run ESLint to check code quality
- `npm run preview` – Preview production build locally

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License – see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/AqdasAmir/VibeChat/issues).

---

**Built with ❤️ by Aqdas Amir**
