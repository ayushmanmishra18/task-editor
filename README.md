# Task Manager Application 🎯✨📂

## Overview 🎨✨🚀

This project introduces an advanced **Task Manager Application** leveraging Node.js, Express.js, EJS templates, and Tailwind CSS. The system enables users to:

- Formulate tasks with detailed titles and descriptions.
- Systematically review a catalog of created tasks.
- Examine individual task details within an intuitive interface.

## Features 🛠️💡📋

1. **Task Creation**:

   - Facilitates task generation with designated titles and elaborate descriptions.
   - Tasks are securely persisted as `.txt` files in a dedicated `files` directory.

2. **Task Listing**:

   - Curates all task files on the homepage for easy access.
   - Enables seamless navigation to individual task views.

3. **Task Details**:

   - Exhibits the comprehensive content of selected task files within an aesthetically optimized interface.

## Tech Stack 💻🌐⚙️

- **Backend Framework**: Node.js and Express.js
- **Frontend Layer**: EJS (Embedded JavaScript Templates), Tailwind CSS
- **File Management**: `fs` module for file handling and operations

## Directory Structure 🗂️📁🔍

```
project-directory/
├── files/               # Repository for task-specific files
├── public/              # Static assets (CSS, JS, images)
├── views/               # EJS template files
│   ├── index.ejs        # Task listing and creation interface
│   ├── task.ejs         # Task-specific detail view
├── app.js               # Primary server script
├── package.json         # Project configuration and dependencies
└── README.md            # Documentation
```

## Installation ⚡🔧📥

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Install all dependencies:

   ```bash
   npm install
   ```

4. Start the application server:

   ```bash
   node app.js
   ```

5. Access the application through:

   ```
   http://localhost:3000
   ```

## Usage 🖱️📄🎯

1. Open the homepage to explore the task list.
2. Utilize the "Create Task" form for new task submissions.
3. Click any listed task to delve into its details.

## Code Explanation 📜🖋️🛠️

### `app.js`

- **Route ****`/`**:
  - Fetches task filenames from the `files` directory and renders them using `index.ejs`.
- **Route ****`/create`**:
  - Generates a new `.txt` file corresponding to the task and stores it in the `files` directory.
- **Route ****`/task/:fileName`**:
  - Reads the content of the specified task file and displays it using `task.ejs`.

### `index.ejs`

- Features a task creation form alongside a list of existing tasks retrieved from the `files` directory.

### `task.ejs`

- Showcases the title and content of a chosen task with a navigation link to return to the homepage.

## Dependencies 📦🔗📋

- **Express**: Web application framework
- **EJS**: Template engine for dynamic HTML rendering
- **Path**: Utility for file and directory paths
- **File System (****`fs`****)**: API for file operations

## Custom Styling 🎨👗✨

- Tailwind CSS drives the visual appeal of the interface.
- Implements a clean and contemporary design ethos with responsive layouts and intuitive UI components.

## Future Enhancements 🚀🌟🔮

- Integrate task deletion capabilities.
- Enable task editing for greater flexibility.
- Introduce user authentication to secure task data integrity.
- Transition from file-based storage to a robust database solution (e.g., MongoDB) for enhanced scalability and performance.

##

