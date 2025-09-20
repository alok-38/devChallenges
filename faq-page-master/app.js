const questionEls = document.querySelectorAll('h3');
const faqItem = document.querySelector('.faq-item');
const faqItemStyle = window.getComputedStyle(faqItem);
const backgroundColor = faqItemStyle.backgroundColor;

// Initialize all answers as closed and arrows pointing down
questionEls.forEach((question) => {
    const img = question.querySelector('img');
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector('p');

    answer.classList.add('closed'); // Hide answers on page load
    img.setAttribute('src', 'resources/Expand_down.svg'); // Set arrow down
});

// Add click listeners to toggle answer visibility and arrow
questionEls.forEach((question) => {
    question.addEventListener('click', () => {
        const img = question.querySelector('img');
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('p');

        const currentSrc = img.getAttribute('src');

        if (currentSrc === 'resources/Expand_up.png') {
            img.setAttribute('src', 'resources/Expand_down.svg');
            answer.classList.add('closed');
            faqItem.style.backgroundColor = backgroundColor;
            faqItem.style.padding = "0px";
        } else {
            img.setAttribute('src', 'resources/Expand_up.png');
            answer.classList.remove('closed');
            faqItem.style.backgroundColor = "#2A2936";
            faqItem.style.borderRadius = "20px";
            faqItem.style.padding = "28px 32px";
        }
    });
});
