# Project Documentation

## Overview
This project is a Book Reviews Platform, providing users with the ability to create, read, update, and delete book reviews. It also includes features such as user authentication, comments on reviews, and a user-friendly interface for seamless interaction.

## Features
1. **User Authentication:**
   - Users can register, log in, and log out.
   - Authentication is managed through JSON Web Tokens (JWT).

2. **Review Management:**
   - Users can create new book reviews with details such as title, author, genre, review content, rating, and cover image.
   - Reviews can be edited and deleted by the author.

3. **Comments:**
   - Users can add comments to existing reviews.
   - Comments display the author's username and the comment text.


## Project Architecture

### Frontend
- **React.js:** The frontend is built using React.js, providing a dynamic and interactive user interface.
- **React Router:** Used for client-side routing to navigate between different pages.

### State Management
- **Context API:** Utilized for managing global states, such as authentication and review data.
- **Reducer Pattern:** Used for managing complex states, such as review details and comments.

### Styling
- **CSS:** Styling is done using CSS for a clean and visually appealing design.
- **CSS Modules:** Localized styling is achieved using CSS Modules for modular and maintainable code.

### Backend
- **Node.js:** The backend is implemented using Node.js for server-side logic using SoftUni Practice Server.


### Authentication
- **JSON Web Tokens (JWT):** JWT is used for secure user authentication.

### Services
- **Review Service:** Handles CRUD operations for reviews.
- **Comment Service:** Manages comments related to reviews.
- **Auth Service:** Deals with user authentication, registration, and logout.

### Utilities
- **Requester:** A utility for making HTTP requests to the backend API.
- **Custom Hooks:** Custom hooks are used for common functionalities, such as form handling.

### Project Structure
- **src/**
  - **components/:** React components.
  - **contexts/:** Context providers for global state management.
  - **hooks/:** Custom hooks used throughout the project.
  - **pages/:** React components representing different pages.
  - **public/:** Static assets like images and videos.
  - **services/:** API services for different entities.
  - **styles/:** CSS stylesheets.
  - **utils/:** Utility functions.

## Getting Started
1. Clone the repository: `git clone https://github.com/DeriaIzzet/A-Bookworm-s-Guide.git`
2. Install dependencies on client and server: `npm install`
3. Start the development server: `node server.js`
3. Start the react project: `npm run dev`




