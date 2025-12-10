const avatarEl = document.querySelector('.top-nav__avatar');
const userName = document.querySelector('.top-nav__name');

const displayUsername = () => {
    userName.textContent = "Alok";
}

avatarEl.addEventListener('click', displayUsername);
