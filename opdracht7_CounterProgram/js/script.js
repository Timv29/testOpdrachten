"use strict"
const cl = console.log.bind(console);
// Counter program
// You'll be making a counter program with three buttons. an increase by (0,5) decrease by (1) and a reset
// tip to solve: ???


// declairing variables for each button, label and counterset
let counter = 0;
const increase = 0.5;
const decrease = 1;

const updateCounter = function(){
    document.querySelector("#countLabel").innerHTML = counter;
}

// set counter to 0


// increase by 0.5
document.querySelector("#increaseBtn").addEventListener("click", () => {
    counter += increase;
    updateCounter();
});

// decrease by 1
document.querySelector("#decreaseBtn").addEventListener("click", () => {
    counter -= decrease;
    updateCounter();
});

// reset counter to 0
document.querySelector("#resetBtn").addEventListener("click", () => {
    counter = 0;
    updateCounter();
});