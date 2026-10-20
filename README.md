🎥 Meetup - Real-Time Video Conferencing Application

Meetup is a full-stack, real-time video conferencing web application built with WebRTC, React, Node.js, and Socket.io. It allows users to seamlessly create, join, and manage high-quality video meetings with built-in real-time chat functionality.

✨ Features

🔐 Secure Authentication: User sign-up and login powered by Clerk. (Supports Google OAuth and Email/Password).

📹 Real-Time Video & Audio: Peer-to-peer fast and secure video communication using WebRTC.

💬 In-Meeting Chat: Real-time messaging system within the meeting room using Socket.io.

👑 Host Controls: Meeting hosts can end the meeting for all participants.

📊 Plan-Based Limits: Enforced participant limits based on user subscription tiers (e.g., 10 users for Free plan, 100 for Premium plan).

🗄️ Persistent Chat & History: Meeting details and chat history are saved in a Serverless PostgreSQL database (Neon DB).

🎨 Responsive UI: Modern and clean user interface built with Tailwind CSS.


🛠️ Tech Stack

Frontend:

React (Vite)

Tailwind CSS

Lucide React (Icons)

Clerk (Authentication)

React Router DOM

Backend:

Node.js & Express.js

Socket.io (Signaling for WebRTC & Chat)

PostgreSQL (Neon Serverless DB)

🚀 Getting Started

Prerequisites

Make sure you have Node.js and npm installed on your machine. You will also need accounts on Clerk and Neon DB to get your API keys.

1. Clone the repository

git clone https://github.com/your-username/meetup.git
cd meetup


2. Setup the Backend

cd server
npm install


Create a .env file in the server directory and add your Neon Database string:

DATABASE_URL=your_neon_postgres_connection_string


Start the backend server:

npm start
# or node index.js


3. Setup the Frontend

Open a new terminal and navigate to the frontend folder:

cd client
npm install


Create a .env file in the client directory:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000 # Replace with your backend port


Start the frontend development server:

npm run dev


Built with ❤️ by Raksha for seamless global communication.