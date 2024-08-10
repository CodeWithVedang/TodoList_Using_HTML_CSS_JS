document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const reminderInput = document.getElementById('reminderInput');
    const todoList = document.getElementById('todoList');

    // Create an audio element for the tune
    const audio = new Audio('audio.mp3'); // Make sure the path is correct

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        const reminderTime = reminderInput.value;

        if (todoText && reminderTime) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="todo-text">${todoText}</span>
                <span class="countdown" id="countdown-${Date.now()}"></span>
                <button class="done-btn">Done</button>
                <button class="delete-btn">Delete</button>
            `;

            const doneBtn = li.querySelector('.done-btn');
            const deleteBtn = li.querySelector('.delete-btn');
            const countdownElem = li.querySelector('.countdown');

            doneBtn.addEventListener('click', () => {
                li.classList.toggle('done');
            });

            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            todoList.appendChild(li);

            // Set up the countdown timer
            const updateCountdown = () => {
                const now = new Date();
                const reminderDate = new Date(reminderTime);
                const timeDiff = reminderDate - now;

                if (timeDiff <= 0) {
                    countdownElem.textContent = 'Time’s up!';
                    countdownElem.style.color = '#dc3545'; // Change color to red for 'Time's up!'
                    // Play the tune
                    audio.play();
                    setTimeout(() => audio.pause(), 5000); // Stop the tune after 5 seconds
                    setTimeout(() => audio.currentTime = 0, 5000); // Reset the audio playback time

                    // Show notification if the timer is up
                    new Notification('Reminder', {
                        body: todoText,
                    });
                    clearInterval(timerInterval);
                } else {
                    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                    countdownElem.textContent = `${hours}h ${minutes}m ${seconds}s`;
                }
            };

            // Initial update
            updateCountdown();
            // Update countdown every second
            const timerInterval = setInterval(updateCountdown, 1000);

            // Request notification permission if not already granted
            if (Notification.permission !== 'granted') {
                Notification.requestPermission();
            }
        }

        // Clear input fields
        todoInput.value = '';
        reminderInput.value = '';
    });
});
