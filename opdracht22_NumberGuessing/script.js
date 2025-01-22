"use strict"
const cl = console.log.bind(console);
// Number guessing game
// You'll be making a number guessing game with the window.prompt method



// set variables min and max number 
const minNum = 1;
const maxNum = 100;
// generate and set randomised number
const randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum);
// set counters and declare global variables
let running = true;
let guess;
let attempts = 0;
// define while loop for 5 possibilities using prompt window and alert windows
// guess a number between 1 and 100

// 1. not an number: please enter a valid number
// 2. number not between range: Please enter a valid number between ${minNum} and ${maxNum}
// 3. Please enter a higher number. TRY AGAIN!
// 4. Please enter a lower number. TRY AGAIN!
// 5. You WON in ${attempts} attempts, the number was ${answer}

while(running){
    guess = window.prompt("Guess a number between 1 and 100");
    guess = Number(guess);
    attempts++;
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else if(guess < randNum){
        window.alert("Please enter a higher number. Try Again!");
    }
    else if(guess > randNum){
        window.alert("Please enter a lower number. Try Again!");
    }
    else if(guess === randNum){
        window.alert(`You won in ${attempts} attempts!`);
        break;
    }
}

if(window.confirm("Play again?")){
    location.reload();
}