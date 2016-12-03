var colors = ["red", "green", "blue", "white", "black", "yellow"];

function game() {
    var targetColor;
    var userInput;
    var countIteration = 0;
    colors.sort();
    targetColor = Math.floor(Math.random() * colors.length);
    do {
        userInput = prompt("I am thinking of one of colors\n\n" + colors + "\n\nWhat color am I thinking of?");
        countIteration++;
    } while (checkUserGuess(userInput, targetColor, countIteration));
}

function query(tagName) {
    return document.getElementsByTagName(tagName)[0];
}

function checkUserGuess(userInput, targetColor, countIteration) {
    var index = colors.indexOf(userInput);
    if (index < 0) {
        alert("I do not recognize that color!");
    } else if (index > targetColor) {
        alert("Your input alphabetically higher than mine!");
    } else if (index < targetColor) {
        alert("Your input alphabetically lower than mine!");
    } else {
        var inputElement = query("body");
        inputElement.style.background = colors[targetColor];
        alert("You are right! You took " + countIteration + " guesses!");
        return false;
    }
    return true;
}