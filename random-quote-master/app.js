fetch("https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json")
    .then((response) => response.json())
    .then((data) => {
        const quotes = data;

        function randomIndexGenerate() {
            return Math.floor(Math.random() * quotes.length);
        }

        function displayRandomQuote() {
            const quoteAuthor = document.querySelector("h1");
            const quoteText = document.querySelector("h2");
            const tags = document.querySelectorAll(".tags-row__item");

            const index = randomIndexGenerate();
            const quote = quotes[index];

            quoteAuthor.textContent = quote.author || "Unknown";
            quoteText.textContent = `"${quote.quote}"`;
            tags[0].textContent = quote.tags?.[0] || "No tag";
            tags[1].textContent = quote.tags?.[1] || "No tag";
        }

        function copyToClipboard() {
            const quoteText = document.querySelector("h2");
            navigator.clipboard.writeText(quoteText.textContent)
                .then(() => alert("Quote copied to clipboard!"))
                .catch(err => console.error("Copy failed", err));
        }

        const randomBtn = document.getElementById("random-button");
        const clipboardBtn = document.getElementById("clipboard-button");

        randomBtn.addEventListener("click", displayRandomQuote);
        clipboardBtn.addEventListener("click", copyToClipboard);

        displayRandomQuote(); // Show one immediately on page load
    })
    .catch((error) => {
        console.error("Error fetching quotes:", error);
    });

    