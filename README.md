# MERN Weather App

This is the README file for the MERN (MongoDB, Express, React, Node.js) stack weather app. This app provides weather information, jokes, and user settings functionality.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Client Folder](#client-folder)
- [Server Folder](#server-folder)
- [License](#license)

## Introduction

The MERN Weather App is a web application that allows users to check the weather for their chosen city. It also provides daily jokes for some fun. Users can register, log in, and customize their settings.

## Installation

To run the MERN Weather App on your local machine, follow these steps:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/mern-weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd mern-weather-app
   ```

3. Install the dependencies for both the client and server folders:

   For the client:
   ```bash
   cd client
   npm install
   ```

   For the server:
   ```bash
   cd server
   npm install
   ```

4. Create a `.env` file in the server folder and add the following environment variables:

   ```env
   MONGO_URL=your-mongodb-connection-string
   PORT=your-server-port
   ```

5. Start both the client and server:

   For the client:
   ```bash
   npm start
   ```

   For the server:
   ```bash
   npm start
   ```

6. Access the app in your web browser at `http://localhost:3000` (or the port you specified in the `.env` file for the server).

## Usage

The MERN Weather App provides the following features:

- **Home Page**: Displays the current weather for the user's chosen city, a daily joke, and a 5-day weather forecast.
- **Registration**: Users can create an account by providing a username and password.
- **Login**: Registered users can log in to access their personalized weather information.
- **User Settings**: Users can customize their settings, including their preferred city for weather updates.
- **Logout**: Users can log out of their accounts.

## Client Folder

### App.js

This is the main React component that renders the app's layout. It includes routing for different pages like the welcome page, registration page, login page, home page, and user settings page. It also displays a header and footer across all pages.

### Home.jsx

This component displays the main content of the home page. It fetches weather data, jokes, and user information from the server and renders them on the page. Users can also log out from this page.

## Server Folder

### server.js

This is the main Node.js and Express server file. It connects to a MongoDB database, sets up CORS for client-server communication, and defines routes for authentication. The server listens on the specified port for incoming requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.