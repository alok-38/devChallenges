const buttonEl = document.querySelector('button');
const coinImage = document.querySelector('img'); // first img is the coin
const resultText = document.querySelector('div h2');

function coinFlip() {
    const isHeads = Math.floor(Math.random() * 2) === 0;

    if (isHeads) {
        coinImage.src = "resources/heads.svg";
        coinImage.alt = "heads";
        resultText.textContent = "Heads";
    } else {
        coinImage.src = "resources/tails.svg"; // make sure this file exists
        coinImage.alt = "tails";
        resultText.textContent = "Tails";
    }
}

buttonEl.addEventListener('click', coinFlip);
