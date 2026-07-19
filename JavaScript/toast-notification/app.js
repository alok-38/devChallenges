const toastContainer = document.getElementById('toast-container');
const markButton = document.querySelector('button');

markButton.addEventListener('click', () => {
    toastContainer.textContent = "All notifications marked as red";
})