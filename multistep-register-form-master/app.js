document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const steps = document.querySelectorAll(".step-content");
    const dots = document.querySelectorAll(".dot");
    const stepNumberEl = document.querySelector(".current-step-number");
    const continueButton = form.querySelector("button[type='submit']");

    let currentStep = 0;

    const updateStep = () => {
        // Hide all steps
        steps.forEach((step, index) => {
            step.classList.toggle("hidden", index !== currentStep);
        });

        // Update step indicator
        dots.forEach((dot, index) => {
            dot.classList.toggle("active-dot", index === currentStep);
        });

        // Update step number
        stepNumberEl.textContent = currentStep + 1;

        // Update button label
        continueButton.textContent = currentStep === steps.length - 1 ? "Submit" : "Continue";
    };

    const updateSummary = () => {
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const selectedTopics = document.querySelectorAll("input[name='topics']:checked");

        const summaryName = document.querySelector("#summary-name");
        const summaryEmail = document.querySelector("#summary-email");
        const summaryTopics = document.querySelector("#summary-topics");

        summaryName.textContent = name;
        summaryEmail.textContent = email;

        // Clear previous topics
        summaryTopics.innerHTML = "";

        // Add selected topics
        selectedTopics.forEach((topic) => {
            const li = document.createElement("li");
            li.textContent = topic.value;
            summaryTopics.appendChild(li);
        });
    };

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (currentStep === 0) {
            // Validate name and email
            const name = document.querySelector("#name");
            const email = document.querySelector("#email");

            if (!name.value.trim() || !email.value.trim()) {
                alert("Please enter both your name and email.");
                return;
            }
        }

        if (currentStep === 1) {
            // Ensure at least one topic is selected
            const selected = document.querySelectorAll("input[name='topics']:checked");
            if (selected.length === 0) {
                alert("Please select at least one topic.");
                return;
            }
        }

        if (currentStep === steps.length - 1) {
            // Final step: Submit form (you can handle with JS here or let HTML submit it)
            alert("Form submitted successfully!");
            form.reset(); // optional: clear form
            currentStep = 0; // restart form
            updateStep();
            return;
        }

        // Before moving to summary, update it
        if (currentStep === steps.length - 2) {
            updateSummary();
        }

        // Go to next step
        currentStep++;
        updateStep();
    });

    // Initialize step 1
    updateStep();
});
