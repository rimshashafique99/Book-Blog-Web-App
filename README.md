# Book-Blog-Web-App
A simple, in-browser blog application built with Node.js, Express.js, and EJS. Create, view, edit, and delete blog posts with a focus on a clean and responsive user interface. Please note: posts are not persisted across sessions in this version.


The goal of this project is to create a basic blog web application using Node.js, Express.js, and EJS. This application allows users to create, view, edit, and delete blog posts directly within the browser. A key focus of this project is to deliver a good user experience through thoughtful styling and responsiveness.

**Important Note:** This version of the application does *not* use a database. Therefore, all blog posts will be reset when the server restarts or the session ends.

## Features

* **Post Creation:** Users can easily create new blog posts via a dedicated form.
* **Post Viewing:** All created posts are displayed on the home page for easy viewing.
* **Post Update/Delete:** Users have the ability to edit existing posts or delete them as needed.
* **Styling:** The application is designed to be well-styled and responsive, ensuring a consistent and pleasant experience across various devices (desktop and mobile).

## Technical Requirements

* **Node.js & Express.js:** The application functions as a web server built on Node.js, with Express.js handling routing and middleware.
* **EJS (Embedded JavaScript):** EJS is utilized as the templating engine to generate dynamic HTML content based on the application's state.
* **CSS:** Custom CSS is used for styling the application, ensuring a good user interface.

## How to Run

Follow these steps to get the application up and running on your local machine:

1.  **Clone the repository:**
    First, clone the project repository to your local machine using Git:
    ```bash
    git clone <your-repo-url>
    ```
    Then, navigate into the project directory:
    ```bash
    cd <your-repo-name>
    ```
2.  **Install dependencies:**
    Once inside the project directory, install all the necessary Node.js packages (like Express and EJS) by running:
    ```bash
    npm install
    ```
3.  **Start the server:**
    After the dependencies are installed, you can start the web server:
    ```bash
    node app.js # Replace 'app.js' with your main server file name if different
    ```
4.  **Open in your browser:**
    Once the server is running, open your web browser and navigate to:
    ```
    http://localhost:3000
    ```
    (Note: The port might be different if specified otherwise in your `app.js` file.)
