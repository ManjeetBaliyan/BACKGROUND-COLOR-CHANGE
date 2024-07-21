const button = document.querySelector(".button"); // (.) is used to inform  we select a class name was button.
const body = document.querySelector("body");
let r = 0;
let g = 0;
let b = 0;
body.style.backgroundColor = `rgb(${r},${g},${b})`; // Initial background color

button.addEventListener("click", changeBackground);

function changeBackground() {
  r = Math.floor(Math.random() * 255); // Use Math.floor() for integer index
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  body.style.backgroundColor = `rgb(${r},${g},${b})`; // Correct array access
}
