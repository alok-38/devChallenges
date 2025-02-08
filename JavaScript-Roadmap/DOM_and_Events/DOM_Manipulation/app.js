const singleElement = document.querySelector('.example-class');
const multipleElements = document.querySelectorAll('.highlighted li');

singleElement.textContent = "New content for the element";

multipleElements.forEach((liElement, index) => {
    liElement.textContent = `List Item ${++index}`;
    // liElement.style.listStyleType = 'none';
    if (index === 3) {
        liElement.style.color = 'red';
        liElement.style.fontSize = '1.5em';
    }
})