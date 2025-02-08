const mainEl = document.querySelector('main');

mainEl.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button')) {
        console.log('Button clicked', event.target);
        // dynamically add a new button
        const newButton = document.createElement('button');
        newButton.textContent = 'New';
        mainEl.appendChild(newButton);
    }
})