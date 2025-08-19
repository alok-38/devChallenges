const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');

// Create a div to display messages
const messageEl = document.createElement('div');
document.body.appendChild(messageEl);

// Sample cart with default items
let cart = [
    { name: "Book", price: 12.99 },
    { name: "Pen", price: 1.5 },
    { name: "Notebook", price: 5.25 }
];

// Function to calculate total
function calculateTotal(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += items[i].price;
    }
    return sum;
}

// Function to display total and message
function displayCartStatus() {
    const total = calculateTotal(cart);
    let message = `<p>Total: $${total.toFixed(2)}</p>`;

    if (total > 20) {
        message += `<p style="color: green;">You get free shipping!</p>`;
    } else {
        const difference = (20 - total).toFixed(2);
        message += `<p style="color: red;">Add $${difference} more for free shipping.</p>`;
    }

    messageEl.innerHTML = message;
}

// Initial display
displayCartStatus();

// Button click event
buttonEl.addEventListener('click', (event) => {
    event.preventDefault();

    const inputValue = inputEl.value.trim();

    if (inputValue !== "") {
        // Add new item with a default price (e.g. $3.00)
        cart.push({ name: inputValue, price: 3.00 });
        inputEl.value = ""; // Clear the input field
        displayCartStatus();
    }
});
