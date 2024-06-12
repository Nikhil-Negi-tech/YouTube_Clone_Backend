# YouTube_Clone_Backend

Welcome to the YouTube Clone Backend repository! This project is a Node.js/Express application that provides the backend functionality for a YouTube clone. It includes features such as user authentication, video upload, video streaming, comments, likes/dislikes, subscriptions, and more. This README provides an overview of the project structure, installation instructions, and a guide to the features implemented.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Sign up, log in, and log out functionalities using JWT.
- **Video Upload**: Upload videos with metadata such as title, description, and tags.
- **Video Streaming**: Stream videos with adaptive bitrate streaming.
- **Comments**: Add, edit, and delete comments on videos.
- **Likes and Dislikes**: Like or dislike videos.
- **Subscriptions**: Subscribe to channels.
- **History**: Track history of watched videos.
- **Recommendations**: Get recommended videos based on user preferences and history.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Youtube_Clone_Backend.git
   cd Youtube_Clone_Backend
2. **Install dependencies:**
   ```bash
   npm install
3. **Set up environment variables:**
   Create a .env file in the root directory and add the following:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
4. **Run the application:**
   ```bash
   npm start
5. **The server will start on:**
   ```bash
   http://localhost:5000
