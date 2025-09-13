/* ================================
   Part 2: JavaScript Functions
   Demonstrating scope, parameters, and return values
================================ */

// Global variable (accessible throughout the script)
let globalCount = 0;

// Function with parameters + return value
function calculateArea(width, height) {
  let area = width * height; // local variable (scope limited to this function)
  return area;
}

// Function showing effect of global variable
function updateCounter(step) {
  globalCount += step; // modifies global scope
  return globalCount;
}

// Function without parameters but returns a message
function greetUser() {
  let message = "Hello from a reusable function!";
  return message;
}

// Demonstration in console
console.log("Area of 5x10:", calculateArea(5, 10));
console.log("Counter after +1:", updateCounter(1));
console.log("Counter after +3:", updateCounter(3));
console.log(greetUser());

/* ================================
   Part 3: JavaScript triggers CSS animations
================================ */

const btn = document.getElementById("animateBtn");
const box = document.getElementById("animatedBox");

// Reusable function to toggle animation
function triggerAnimation() {
  box.classList.toggle("animate");
}

// Event listener → when button clicked, run the function
btn.addEventListener("click", triggerAnimation);
