const inputEl = document.querySelector('input');
const inputElWidth = getComputedStyle(inputEl).width;
inputEl.style.width = "50%"; // ✅ set width properly
console.log(inputElWidth);     // logs original width
