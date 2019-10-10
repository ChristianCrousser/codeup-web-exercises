"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var numberMessage = confirm("Would you like to enter a number?");

var enterNumber = parseInt(prompt("Enter your number."));

var isNumber = !isNaN(enterNumber);

if(enterNumber % 2 === 0) {
    alert("number is even");
} else {
    alert("number is odd");
}

alert("Your number is " + (enterNumber + 100));

if(enterNumber >= 0) {
    alert("This number is positive");
} else {
    alert("This number is negative");
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    var colorMessage;

    if(color === "blue") {
        colorMessage = "Its blue"
    } else if (color === "red") {
        colorMessage = "Its red"
    } else if (color === "cyan"){
        colorMessage = "Cyan is a blue"
    } else {
        colorMessage = "I dont know that color"
    }
    return colorMessage;
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorSwitch() {
    var colorMessage;
    switch(color) {
        case "blue":
            return "I like blue";
        case "red":
            return "red is fun";
        case "cyan":
            return "Cyan is cool";
        default:
            return "Look at all the colors";
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("Please enter a color");
alert(analyzeColorSwitch(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalPrice) {
    var discountTotal = 0;

    switch(luckyNumber) {
        case 0:
            discountTotal = 0;
            break;
        case 1:
            discountTotal = .1;
            break;
        case 2:
            discountTotal = .25;
            break;
        case 3:
            discountTotal = .35;
            break;
        case 4:
            discountTotal = .50;
            break;
        case 5:
            discountTotal = 1;
            break;
    }

    return totalPrice - (totalPrice * discountTotal);
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalBillPrompt = parseFloat(prompt("What was your total bill?"));

var finalAmount = calculateTotal(luckyNumber, totalBillPrompt);

alert("Your lucky number is: " +luckyNumber + " Your total bill was: " + totalBillPrompt + " Your discount price is " + finalAmount);


