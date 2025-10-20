const ham = document.querySelector('.hamburger');
const ul = document.querySelector('nav ul');
const body = document.querySelector('body');
const a = document.querySelectorAll('a');

// Get computed styles
const defaultBodyBg = window.getComputedStyle(body).backgroundColor;
const defaultTextColor = window.getComputedStyle(body).color;
const defaultLinkColor = window.getComputedStyle(a[0]).color;

ham.addEventListener('click', () => {
    ul.classList.toggle('active');
});

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    const currentBg = window.getComputedStyle(body).backgroundColor;

    if (currentBg === defaultBodyBg) {
        // Switch to dark mode
        body.style.backgroundColor = 'black';
        body.style.color = '#ffffff';

        a.forEach(link => {
            link.style.color = '#ffffff';
        });

    } else {
        // Switch back to light mode
        body.style.backgroundColor = defaultBodyBg;
        body.style.color = defaultTextColor;

        a.forEach(link => {
            link.style.color = defaultLinkColor;
        });
    }
});
