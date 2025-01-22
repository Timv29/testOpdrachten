"use strict"
const cl = console.log.bind(console);

// Random Number generator
// You'll be making a Random Number generator, using 2 dice (variables) with numbers from 1 to 6


// assigning buttons to a variable
const rollBtn = document.querySelector("#myButton")

// assigning dice to a variable
const die1 = document.querySelector("#die1")
const die2 = document.querySelector("#die2")
// setting min max 1 to 6


// declairing global variables nr1 and nr2


// adding function to generate 2 randoms numbers num1 and num2
rollBtn.addEventListener("click", () => {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    die1.innerHTML = num1;
    die2.innerHTML = num2;
})