🎥 Meetup - Real-Time Video Conferencing Application

🚀 About the Project

Meetup is a seamless, real-time video communication platform designed to connect people instantly. Whether it's a 1-on-1 meeting or a group conference, Meetup handles peer-to-peer WebRTC connections with low latency. It includes built-in live chat, host controls, and a persistent PostgreSQL database for meeting history.

✨ Key Features

Secure Authentication: Passwordless & OAuth login powered by Clerk.

WebRTC Video/Audio: Crystal clear, low-latency peer-to-peer media streaming.

Live Text Chat: In-room real-time messaging using Socket.io.

Host Controls: Meeting hosts can end the call for everyone and manage participants.

Tiered Access: Participant limits enforced dynamically (Free vs. Premium plans).

Modern UI: Fully responsive, accessible, and beautifully designed with Tailwind CSS.

💻 Tech Stack

###Frontend

Framework: React.js (Vite)

Styling: Tailwind CSS

Icons: Lucide React

Routing: React Router DOM

Authentication: Clerk

###Backend & Database

Runtime: Node.js

Framework: Express.js

Real-time Engine: Socket.io

Database: PostgreSQL (Neon Serverless DB)

📁 Folder Structure

meetup/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/         # Images, icons, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── config/         # API and Socket configurations
│   │   ├── hooks/          # Custom React hooks (useWebRTC, useChat)
│   │   └── App.jsx         # Main application routing
│   └── package.json
│
└── server/                 # Backend Express application
    ├── config/             # Database connection (db.js)
    ├── controllers/        # Route controllers
    ├── socket.js           # Socket.io signaling and chat logic
    ├── server.js            # Express server entry point
    └── package.json


🛠️ Getting Started

Follow these instructions to set up the project locally on your machine.

Prerequisites

Node.js (v16 or higher)

npm or yarn

Accounts on Clerk (Auth) and Neon (Database)

Installation

Clone the repository:

git clone https://github.com/your-username/meetup.git
cd meetup


Install Backend Dependencies:

cd server
npm install


Install Frontend Dependencies:

cd ../client
npm install


Environment Variables

You need to set up environment variables for both the client and server.

1. Client (client/.env):

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000


2. Server (server/.env):

PORT=5000
DATABASE_URL=your_neon_postgresql_connection_string


Running the App Locally

Start the backend server:

cd server
npm start


Start the frontend application:

cd client
npm run dev


Your app should now be running on http://localhost:5173.

🌍 Deployment

Frontend: Highly recommended to deploy on Vercel. Simply connect your GitHub repository and add the VITE_* environment variables.

Backend: Can be deployed on Render or Railway. Make sure to set the Node environment to production and add the DATABASE_URL.

Database: The database is already hosted on Neon DB (Serverless PostgreSQL).

Built with ❤️ by Raksha for seamless global communication.