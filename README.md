# Desktop Banking Frontend

A modern and responsive frontend interface for an online banking system, built with React and Electronjs. The application focuses on usability, clean UI design, and scalable component structure.

##Demo
https://youtu.be/U6LyGsvctXw


## Tech Stack
- Electronjs
- JavaScript (ES6+)
- CSS 

## Features
- Login and authentication UI
- User dashboard
- Account overview interface
- Transaction history layout
- Responsive design for mobile and desktop

## Screenshots
<img width="1319" height="877" alt="Screenshot 2026-01-19 162148" src="https://github.com/user-attachments/assets/adebaf31-57ae-45c9-987d-7908d33893df" />



## Project Structure
FRONTEND/
 ├── assets/              # Static assets
 ├── renderer/            # Renderer process (UI)
 │   ├── css/             # Application stylesheets
 │   │   └── style.css
 │   ├── images/          # UI images and icons
 │   ├── js/              # Frontend JavaScript logic
 │   │   ├── api/         # API interaction logic
 │   │   └── renderer.js
 │   ├── index.html       # Main UI entry point
 │   └── about.html       # About page
 ├── main.js              # Electron main process
 ├── preload.js           # Secure preload bridge
 ├── package.json         # Project metadata and scripts
 └── package-lock.json    # Dependency lock file

