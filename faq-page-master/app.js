const articles = document.querySelectorAll('main article');

articles.forEach(article => {
    const toggleImg = article.querySelector('h3 img');
    const answer = article.querySelector('p');

    // Check if the image indicates an expanded state
    const isExpanded = toggleImg.src.endsWith('Expand_up.png');

    // Set initial state
    answer.style.display = isExpanded ? 'block' : 'none';

    // Toggle on click
    toggleImg.addEventListener('click', () => {
        const isVisible = answer.style.display === 'block';

        answer.style.display = isVisible ? 'none' : 'block';
        toggleImg.src = isVisible
            ? 'resources/Expand_down.svg'
            : 'resources/Expand_up.png';
    });
});
