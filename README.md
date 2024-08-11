 ## Todo List Using HTML, CSS, and JavaScript
  
 ## Overview  
This repository contains a dynamic Todo List application built with HTML, CSS, and JavaScript. It demonstrates practical usage of DOM manipulation, local storage, and includes a countdown timer with audio notifications.

 ## Features  
 Add New Tasks  : Users can add new tasks with a reminder time.
 Task Completion  : Mark tasks as complete with a checkbox.
 Task Deletion  : Remove tasks from the list.
 Countdown Timer  : Tasks can have a countdown timer that alerts the user when the time is up.
 Audio Notifications  : Play a tune and show a notification when the countdown reaches zero.
 Responsive Design  : Adapted for various screen sizes with a stylish, modern interface.

  ## Getting Started  
  ##Prerequisites  
A modern web browser (e.g., Chrome, Firefox, Safari).
Basic knowledge of HTML, CSS, and JavaScript.

 ## Installation  
  Clone the Repository  
git clone https://github.com/CodeWithVedang/TodoList_Using_HTML_CSS_JS.git

  Navigate to the Project Directory
  
cd TodoList_Using_HTML_CSS_JS

0pen the index.html File

Open index.html in your preferred web browser. For a more seamless experience, use a development environment with live server capabilities, like Visual Studio Code with the Live Server extension.

 ## Usage  
Adding Tasks:
1. Enter a task description in the input field.
2. Set a reminder date and time using the datetime-local input.
3. Click "Add Task" to add the task to the list.

## Marking Tasks as Complete:
Click the "Done" button next to a task to toggle its completion status.

## Removing Tasks:
Click the "Delete" button next to a task to remove it from the list.

## Countdown Timer:
When a task is added with a reminder, a countdown timer will start.
The timer updates every second and shows hours, minutes, and seconds until the reminder time.
Once the timer reaches zero, a notification is shown, and an audio alert is played.
## Code Structure
  index.html  : Provides the basic structure and layout of the application.
  style.css  : Contains styles for the application, including animations and responsive design.
  script.js  : Handles user interactions, task management, countdown timers, and notifications.

## Key Elements
  HTML  :
A form for inputting tasks and setting reminders.
A list to display tasks.
  CSS  :
Gradient background with animated moving objects for a dynamic effect.
Styling for the container, buttons, and task items.
Transitions and hover effects for interactive elements.
  JavaScript  :
Event listeners for adding, completing, and deleting tasks.
Countdown timer logic with periodic updates.
Audio notifications and browser notifications for reminders.
Contributing
Contributions are welcome! To contribute to this project, please follow these steps:

Fork the Repository: Create a copy of the repository on GitHub.
Create a Branch: Branch off from the main repository to implement changes.
git checkout -b feature/your-feature
Make Changes: Implement your changes or new features.

Commit Changes: Commit your modifications with clear, descriptive messages.
git commit -m "Add feature XYZ"

Push Changes: Push your changes to your forked repository.
git push origin feature/your-feature

Create a Pull Request: Submit a pull request to merge your changes into the main repository.

Code Style
Use consistent indentation (2 spaces for HTML/JavaScript, 4 spaces for CSS).
Write clear and concise commit messages.
Ensure code adheres to linting rules and passes all tests.
Known Issues
Browser Compatibility: Some features, like notifications, may not work on older browsers.
Audio File: Ensure the path to audio.mp3 is correct; otherwise, the audio notification will not work.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please reach out to @CodeWithVedang.

