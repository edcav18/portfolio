# React Portfolio Website

## Overview
This project is a **React-based portfolio website** designed to showcase personal skills, professional background, and a collection of projects. It features a modern, responsive design with a clean and intuitive user interface. The website is structured to include sections for home, about, services, portfolio projects, and a contact form for visitors to get in touch.

---

## Features
- **Single Page Application:** Built using React Router for smooth and seamless navigation.
- **Responsive Design:** Adjusts to various screen sizes, ensuring optimal user experience on desktop, tablet, and mobile devices.
- **Dynamic Content:** Pages like "About" and "Contact" utilize React hooks for dynamic updates and state management.
- **Interactive Contact Form:** Validates user input and integrates with EmailJS for handling messages.
- **Portfolio Showcase:** Displays recent projects with links to GitHub repositories.
- **Custom Components:** Modular design with reusable React components like `Header`, `Footer`, `Sidebar`, and `ContactForm`.

---

## Technologies Used
- **Frontend:**
  - React.js
  - React Router DOM
  - CSS3 (with responsive design principles)
- **Backend Services:**
  - EmailJS for email form submissions
- **Deployment:**
  - Optimized for deployment on platforms like Netlify or GitHub Pages

---

## Pages and Navigation

1. **Home:**
    - Welcoming banner with a personal introduction.
    - Links to learn more, view projects, and explore services.

2. **About**:
    - Biography including skills and background.
    - Personal image and story.

3. **Services**:
    - Description of available services grouped into categories (e.g., Web Development, Software Development).

4. **Portfolio**:
    - Grid-based showcase of projects with links to GitHub repositories.

5. **Contact**:

    - Interactive form for submitting inquiries.
    - Includes fields for name, email, message, and referral source.

---

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/edcav18/portfolio.git cd your-repository
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open the app in your browser:
    ```bash
    http://localhost:3000
    ```

---


## Deployment
To deploy the app:

1. Build the project:

    ```bash
    npm run build
    ```
2. Deploy the `build` folder to a hosting service like Netlify or GitHub Pages.