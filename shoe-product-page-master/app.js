const buttons = document.querySelectorAll('button');
const h1El = document.querySelector('h1');
const h1ElContent = h1El.textContent;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'add-to-cart') {
            console.log("Added to cart");
            h1El.textContent = "Nike Air Zoom Pegasus 38 add to cart";
        } else if (button.id === 'add-to-wishlist') {
            h1El.textContent = "Nike Air Zoom Pegasus 38 add to wishlist";
            // Do NOT add event listener here
        }
    });
});

// Add toggle class listener once, separately
const wishlistBtn = document.getElementById('add-to-wishlist');
wishlistBtn.addEventListener('click', () => {
    wishlistBtn.classList.toggle('active');
});
