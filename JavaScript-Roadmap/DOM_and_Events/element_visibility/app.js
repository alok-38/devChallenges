const buttonEl = document.querySelector('button');
const divEl = document.querySelector('div');

// Set the div to be initially hidden
divEl.style.display = 'none';

buttonEl.addEventListener('click', function (event) {
    const divStyle = window.getComputedStyle(divEl);
    if (divStyle.display === 'none') {
        divEl.style.display = 'block';
        divEl.textContent = `Block level element`;
    } else {
        divEl.style.display = 'none';
    }
});
