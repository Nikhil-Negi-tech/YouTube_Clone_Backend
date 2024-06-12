# YouTube_Clone_Backend

Welcome to the YouTube Clone Backend repository! This project is a Node.js/Express application that provides the backend functionality for a YouTube clone. It includes features such as user authentication, video upload, video streaming, comments, likes/dislikes, subscriptions, and more. This README provides an overview of the project structure, installation instructions, and a guide to the features implemented.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
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
   
## Usage

Once the backend server is running, you can start interacting with the API endpoints:

### User Authentication:

- **POST `/api/auth/signup`**: Create a new user.
- **POST `/api/auth/login`**: Log in a user.
- **POST `/api/auth/logout`**: Log out a user.

### Video Management:

- **POST `/api/videos`**: Upload a new video.
- **GET `/api/videos/:id`**: Get video details.
- **GET `/api/videos/stream/:id`**: Stream a video.
- **DELETE `/api/videos/:id`**: Delete a video.

### Comments:

- **POST `/api/comments`**: Add a comment.
- **GET `/api/comments/:videoId`**: Get comments for a video.
- **DELETE `/api/comments/:id`**: Delete a comment.

### Likes and Dislikes:

- **POST `/api/likes`**: Like a video.
- **POST `/api/dislikes`**: Dislike a video.

### Subscriptions:

- **POST `/api/subscriptions`**: Subscribe to a channel.
- **DELETE `/api/subscriptions/:id`**: Unsubscribe from a channel.

### User Profile:

- **GET `/api/users/profile`**: Get user profile information.
- **PUT `/api/users/profile`**: Update user profile information.


## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: JSON Web Tokens for authentication.
- **AWS S3**: For storing video files (optional).
- **FFmpeg**: For video processing and streaming.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes.
4. Submit a pull request.

Please ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the Nikhil License.

## Contact

If you have any questions or suggestions, feel free to contact me at [neginikhilsingh6@gmail.com].
##
Happy coding!

