"use strict";

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);

for (var j = 0; j < 10; j++) {
    var random = Math.floor(Math.random() * 180) + 20;
    if (random % 2 === 0) {
        console.log(random + " is an even number.")

    } else {

    } console.log(random + " is an odd number")
}


for (var k = 1; k < 10; k++) {
    var str = "";
    for (var y = 1; y <= k; y++) {
        str += k;
        console.log(str);
    }
}

for (var h = 100; h >= 5; h -= 5) {
    console.log(h)
}



