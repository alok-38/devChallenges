const anchorElement = document.querySelector('a');
const paraElement = document.querySelector('p');
let paraTextContent = paraElement.textContent;

anchorElement.addEventListener('click', () => {
    paraElement.textContent = `${paraTextContent} Check the new tab!`;
})