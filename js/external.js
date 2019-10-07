console.log("Hello from external Javascript");

alert("Welcome to my Website!")

var userInput = prompt('What is your favorite color?:');

console.log('The user entered: ' + "Great,"+ " " + userInput + " " + "is my favorite color too!");

alert("Great,"+ " " + userInput + " " + "is my favorite color too!");


var lmRental = parseInt(prompt("How long do you want to rent Little Mermaid?"));

var bbRental = parseInt(prompt("How long do you want to rent Brother Bear?"));

var HRental = parseInt(prompt("How long do you want to rent Hercules?"));

alert("The total comes out to $" + (lmRental + bbRental + HRental) * 3 + ".");



var googleHours = parseInt(prompt("Working for Google pays $400/hr. How much work was done at Google?"));

var facebookHours = parseInt(prompt("Working for Facebook pays $350/hr. How much work was done at facebook?"));

var amazonHours = parseInt(prompt("Working for Amazon pays $380/hr. How much work was done at Amazon?"));

alert("You will be taking home $" + (googleHours + facebookHours + amazonHours) + ".");




var roomInClass = confirm("Is there room in this class?");

var studentHasRoom = confirm("Does the student have an early class?");

alert("Student signed up for class: " + (roomInClass && !studentHasRoom) + ".");






var offerValid = confirm("Is the offer still valid?");

var howManyPurchased = parseInt(prompt("How many items are in the guests cart?"));

var premiumMember = confirm("Is this customer a card holder?");

alert("Customer discount applied: " + (offerValid ===true &&(howManyPurchased > 2  || premiumMember)) + ".");


