// Create a new DocumentFragment
const fragment = document.createDocumentFragment();

// Create some elements
for (let index = 0; index < 5; index++) {
    const divEl = document.createElement('div');
    divEl.textContent = `Item ${index + 1}`;
    // Append each new div to the fragment
    fragment.appendChild(divEl);
}

// Once all elements are added, append the fragment to the DOM in one operation
document.querySelector('body').appendChild(fragment);


