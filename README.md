# Comment Application

The Comment Application is a responsive, single-page application (SPA) I've developed using React. This application allows users to post comments, view a list of comments, and delete them. I've implemented a rate limiting feature to prevent spam and store all comments locally using `localStorage`.

## Project Setup

I've configured this project as a private package, utilizing modern development tools and libraries such as Vite, React, Material-UI, and React Toastify for displaying notifications.

### Dependencies

- **React**: I use this for building the user interface.
- **@mui/material**: This is for the UI components.
- **react-router-dom**: I use this for SPA routing.
- **react-toastify**: This is for displaying toast notifications.
- **DOMPurify**: I use this for sanitizing user input to prevent XSS attacks.
- **axios**: I plan to use this for future HTTP requests.

### Development Dependencies

- **TypeScript**: I use this for static type-checking.
- **ESLint** and **@typescript-eslint**: These are for code linting.
- **Vite**: I use this as an optimized build tool.

### Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles and builds the project for production.
- `npm run lint`: Lints the project files.
- `npm run preview`: Serves the built app for previewing.

## Features

- **Responsive UI**: I designed the interface to work across various devices and screen sizes.
- **SPA Architecture**: This enhances the user experience by loading content dynamically without full page reloads.
- **Local Storage**: I persist comments locally, allowing users to see their comments even after refreshing the page.
- **Rate Limiting**: I've implemented a simple rate limiting mechanism to prevent spam by limiting how often a user can post a comment.
- **Front-End Security**: I utilize input sanitization to protect against XSS attacks.

## Limitations

- **Lack of Backend**: Currently, the application operates without a backend, which limits functionalities like real authentication and data persistence across sessions for different users.
- **Client-Side Rate Limiting**: The rate limiting is implemented on the client-side, which may not be fully effective against determined spammers.

## Future Improvements

- **Server-Side Integration**: To enhance functionalities including user authentication, persistent storage, and secure data transmission.
- **Pagination/Infinite Scroll**: To efficiently manage and display a large number of comments.
- **Implement HTTPS**: For secure data transmission when integrating with a backend server.

## Getting Started

1. I clone the repository.
2. I install the dependencies with `npm install`.
3. I start the development server with `npm run dev`.

I visit `http://localhost:3000` to view the application.

---

This document offers an updated overview of my setup and features for the Comment Application. For more detailed information on component usage and development practices, individual component files and the React documentation can be consulted.
