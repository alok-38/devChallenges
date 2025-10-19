const button = document.querySelector('button');
const input = document.querySelector('input');
const modalBox = document.getElementById('successModal');
const form = document.getElementById('subscribeForm');
const closeBtn = document.getElementById('closeModal');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = input.value.trim();

    if (!inputValue || !emailPattern.test(inputValue)) {
        alert("Please enter a valid email address");
    } else {
        modalBox.style.display = 'block';
    }
});

closeBtn.addEventListener('click', () => {
    modalBox.style.display = 'none';
    form.reset();
});
