function calculateArea(width, height) {
    let area = width * height;
    return area
}

console.log(calculateArea(5, 4));

// The call() method
function showDetails(age, profession) {
    console.log(`${this.name} is ${age} years old and is a(n) ${profession}.`);
}

const person = { name: "Alice" };
showDetails.call(person, 30, "Developer");

// apply() method
showDetails.apply(person, [30, "Developer"]);

// bind() method
const personDetails = showDetails.bind(person);
personDetails(30, "Developer");