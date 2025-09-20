const randomButton = document.querySelector('button');
const coinImage = document.querySelector('img');
const headsOrTails = document.querySelector('h2');

function flipCoin() {
    // Add flip class to animate
    coinImage.classList.add('flip');

    // Wait 300ms before switching the image (halfway through the animation)
    setTimeout(() => {
        const isHeads = Math.random() < 0.5;

        if (isHeads) {
            coinImage.src = 'resources/tails.svg';
            headsOrTails.textContent = "Tails";
        } else {
            coinImage.src = 'resources/heads.svg';
            headsOrTails.textContent = "Heads";
        }

        // Remove flip class to allow re-flipping
        coinImage.classList.remove('flip');
    }, 300);
}

randomButton.addEventListener('click', flipCoin);
