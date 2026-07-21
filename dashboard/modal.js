const modal = document.getElementById("auth-modal");
const ctaBtn = document.getElementById("cta-btn");
const closeBtn = document.getElementById("close-modal");

const form = document.getElementById("auth-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

const toggleMode = document.getElementById("toggle-mode");
const formTitle = document.getElementById("form-title");
const errorMsg = document.getElementById("error-msg");

let isLogin = false;

/* Open modal */
ctaBtn.onclick = () => modal.classList.add("show");

/* Close modal */
closeBtn.onclick = () => modal.classList.remove("show");
