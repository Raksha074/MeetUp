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



🌍 Deployment

Frontend: Highly recommended to deploy on Vercel. Simply connect your GitHub repository and add the VITE_* environment variables.

Backend: Can be deployed on Render or Railway. Make sure to set the Node environment to production and add the DATABASE_URL.

Database: The database is already hosted on Neon DB (Serverless PostgreSQL).

Built with ❤️ by Raksha for seamless global communication.