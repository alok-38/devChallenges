// Imagine this came from JSON file
const data = [
    { task: "Buy milk", completed: false },
    { task: "Clean room", completed: true }
];

// Get the container <ul>
const container = document.getElementById("container");

// Create one <li> element
const liElement = document.createElement('li');

liElement.textContent = "Some Text";

// Add a checkbox inside <li>
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

// Add the checkbox into the <li>
liElement.prepend(checkbox);

// ⬇️ VERY IMPORTANT: Add <li> to <ul>
container.appendChild(liElement);
