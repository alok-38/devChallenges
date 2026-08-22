const nameInputEl = document.getElementById("register-name");
const emailInputEl = document.getElementById("register-email");
const continueButton = document.getElementById("continue");

// Pages
const firstRegisterPage = document.getElementById("register-step-1");
const secondRegisterPage = document.getElementById("register-step-2");
const thirdRegisterPage = document.getElementById("register-step-3");

const nameInput = nameInputEl.value.trim();
const emailInput = emailInputEl.value.trim();

// form
const form = document.querySelector(".register__form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = nameInputEl.value.trim();
  const emailInput = emailInputEl.value.trim();
  if (!nameInput || !emailInput) {
    nameInputEl.style.borderColor = "red";
    emailInputEl.style.borderColor = "red";
    firstRegisterPage.style.display = "none";
    secondRegisterPage.style.display = "block";
  } else {
    nameInputEl.style.borderColor = "";
    emailInputEl.style.borderColor = "";
  }
  nameInputEl.value = "";
  emailInputEl.value = "";
});
