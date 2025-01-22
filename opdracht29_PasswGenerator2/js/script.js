"use strict"
const cl = console.log.bind(console);

// define variables within a eventlisteners function
// include the function to generate a random password based on the given chars
document.querySelector("#generate").addEventListener("click", () => {

    // function to generate a random password based on the given chars

    const generatePass = function(lower, upper, num, symbol, length){
        let allowedChars = "";
        let password = "";
        if(lower){
            allowedChars += "abcdefghijklmnopqrstuvwxyz";
        }
        if(upper){
            allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if(num){
            allowedChars += "0123456789";
        }
        if(symbol){
            allowedChars += "!@#$%^&*()_+ -=[]{}|;':,./<>?";
        }
        // check te !allowedChars condition----------------
        cl(`Allowed Characters: "${allowedChars}"`); // Logs the allowed characters
        // -----------------------------------------

        // Explicit check for character sets
        if(allowedChars === ""){
            return "Select at least one set"
        }

        
        if(length < 1){
            return "Minimum of 1 character"
        }

        // Secure random numbers
        const randomNumber = function(max){
            let random_byte = new Uint8Array(1);
            crypto.getRandomValues(random_byte);
            let rand = random_byte[0];
            if(rand > max){
                return randomNumber(max);
            }
            else{
                return rand;
            }
        }

        for(let i = 0; i < length; i++){
            password += allowedChars[randomNumber(allowedChars.length -1)]
        }
        return password
    }

    // function to update the password 
    const length = document.querySelector("#pwLength").value;
    const lower = document.querySelector("#includeLowercase").checked;
    const upper = document.querySelector("#includeUppercase").checked;
    const num = document.querySelector("#includeNumbers").checked;
    const symbol = document.querySelector("#includeSymbols").checked;

    // Handle the generate button click for regeneration
    document.querySelector("#pwResult").innerHTML = generatePass(lower, upper, num, symbol, length);
    
    // Generate initial password on load
})



// Use the Clipboard API to copy the password to the user's clipboard.
document.querySelector("#copyPassword").addEventListener("click", () => {
    const pwField = document.querySelector("#pwResult");

    navigator.clipboard.writeText(pwField.innerHTML)
        .then(() => {
            alert("Text copied to clipboard!")
        })
        .catch(err => {
            console.error("Failed to copy text", err)
        });
})


    // Copy to clipboard using the Clipboard API
