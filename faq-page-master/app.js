document.querySelectorAll("a").forEach(link => {
    link.classList.add("is-interactive");

    /* Hover (mouse) */
    link.addEventListener("mouseenter", () => {
        link.classList.add("is-hovered");
    });

    link.addEventListener("mouseleave", () => {
        link.classList.remove("is-hovered", "is-active");
    });

    /* Focus (keyboard) */
    link.addEventListener("focus", () => {
        link.classList.add("is-hovered");
    });

    link.addEventListener("blur", () => {
        link.classList.remove("is-hovered", "is-active");
    });

    /* Active (mouse + touch) */
    link.addEventListener("mousedown", () => {
        link.classList.add("is-active");
    });

    link.addEventListener("mouseup", () => {
        link.classList.remove("is-active");
    });

    link.addEventListener("touchstart", () => {
        link.classList.add("is-active");
    }, { passive: true });

    link.addEventListener("touchend", () => {
        link.classList.remove("is-active");
    });
});

// Accordion

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq__question");

    question.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        // Close all items
        faqItems.forEach(i => i.classList.remove("is-open"));

        // Toggle current item
        if (!isOpen) {
            item.classList.add("is-open");
        }
    });
});
