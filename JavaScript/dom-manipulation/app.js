const singleElement = document.querySelector(".example-class");

const multipleElements = document.querySelectorAll(".div-highlighted");

singleElement.textContent = "New content for this element";

multipleElements.forEach((element) => {
  element.textContent = "Stuff";
  element.style.color = "blue";
});
