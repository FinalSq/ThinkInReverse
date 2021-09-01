// Control Function
function controlFunction(){
    let userInput = getInput();
    let noSpaceInput = removeSpaces(userInput);
    let reversedString = reverseString(noSpaceInput);
    let isPalindrome = palindrome(noSpaceInput, reversedString);
    let message = document.getElementById("msg");
    let topMessage = document.getElementById("topMsg");

    if (isPalindrome){
        topMessage.textContent = `Well done! You have entered a palindrome!`;
        message.textContent = `Your phrase reversed is: ${reversedString}`;
        revealContent();
    } else {
        topMessage.textContent = `Sorry! You did not enter a palindrome...Try again!`;
        message.textContent = `Your phrase reversed is: ${reversedString}`;
        revealContent();
    }
  
}

function palindrome(firstString, secondString){
    
    if (firstString == secondString){
        return true;
    } else {
        return false;
    }
}
// Remove spaces from string
function removeSpaces(userString){
    return userString.split(" ").join("");
}
// Reverse String and remove spaces
function reverseString(userString){
    let reversedString = [];
    let count = 0;
    for (let index = userString.length - 1; index >= 0; index--) {
        reversedString[count] = userString[index];
        count++;
    }
    return reversedString.join("");
}

function getInput(){
    let userInput = document.getElementById("userString").value;
    userInput = (String(userInput)).toLowerCase();
    return userInput;
}
function revealContent(){
    let reveal = document.getElementById("reveal");
    reveal.classList.remove("invisible");
}
function clearReveal(){
    let reveal = document.getElementById("reveal");
    reveal.classList.add("invisible");
}