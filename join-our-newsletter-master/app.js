const subscribeButton = document.querySelector('button');
const sectionEl = document.querySelector('section');
const inputEl = document.querySelector('input');

subscribeButton.addEventListener('click', () => {
    const emailInput = inputEl.value.trim();

    if (!emailInput || !emailInput.includes('@')) {
        alert("Please enter a valid email address.");
        return;
    }

    sectionEl.classList.add('fade-out');

    setTimeout(() => {
        sectionEl.innerHTML = "<p>Thank you for subscribing!</p>";
        const p = sectionEl.querySelector('p');
        p.style.fontSize = "24px";

        const newButton = document.createElement('button');
        newButton.textContent = "Reload Form";
        newButton.style.marginTop = "16px";
        newButton.addEventListener('click', () => {
            location.reload();
        });

        sectionEl.appendChild(newButton);

        sectionEl.classList.remove('fade-out');
        sectionEl.classList.add('fade-in');

    }, 300);
});
