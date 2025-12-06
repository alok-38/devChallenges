const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const h1El = document.querySelector('h1');
const pEl = document.querySelector('section p');

const subscribe = () => {
    const inputValue = inputEl.value.trim();

    // If on the "subscribe now" state
    if (buttonEl.textContent === 'Subscribe now') {
        if (inputValue) {
            h1El.textContent = 'Thank you for subscribing!';
            buttonEl.textContent = 'Go back!';
            pEl.textContent = '';
            inputEl.value = '';
        } else {
            pEl.textContent = 'Enter a valid email address please...';
            pEl.style.color = 'red';
        }
    }
    // If on the "go back" state
    else {
        h1El.textContent = 'Join our newsletter';
        buttonEl.textContent = 'Subscribe now';
        pEl.textContent = '';
        pEl.style.color = '';
    }
};

buttonEl.addEventListener('click', subscribe);
