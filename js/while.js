"use strict";

// var i = 1;
// // checks condition first, then runs if true
// while(i < 1) {
//     console.log('while:::: ');
//     console.log(i*=2)
// }
// // runs, then checks the condition
// do {
//     console.log('do:::: ');
//     console.log(i *= 2);
// }while(i<1);



// var bob = Math.floor(Math.random() *100) +90;
// console.log(bob);


var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (allCones > conesBought) {
        allCones -= conesBought;
        console.log("Customer bought " + conesBought + " cones. There are " + allCones + " cones left in inventory.")
    } else if (allCones < conesBought) {
        console.log("I cannot sell you " + conesBought + " cones. I only have " + allCones + " cones left in inventory.")
    } else {
        allCones -= conesBought;
        console.log("I can leave! I sold all of my cones today!");
    }
}while (allCones > 0);

