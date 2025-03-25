// Get the necessary DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task to the list
function addTask() {
    // Get the task value from the input field
    const taskValue = taskInput.value.trim();

    // Check if the input is not empty
    if (taskValue !== "") {
        // Create a new list item (li) element
        const li = document.createElement('li');

        // Create a text node for the task and append it to the li
        li.textContent = taskValue;

        // Create a "remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');

        // Append the remove button to the li element
        li.appendChild(removeButton);

        // Append the li to the task list (ul)
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";

        // Add event listener to remove button to remove task
        removeButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
    } else {
        alert("Please enter a task!");
    }
}

// Event listener for the Add Task button
addTaskButton.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
