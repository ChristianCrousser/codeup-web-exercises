function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

console.log(sum(2,2));
console.log(sum(3,4));
//write function to find the area of a triangle
function triangle(a,b,c) {
    //this variable stores half the perimeter
    var half = (a + b + c);
    {
        //the area is the squareroot of this
        var area = Math.sqrt(half * (half - a) * (half - b) * (half - c))
        //function returns the area
        return area;
    }
    {}
    //console log to see result
    console.log(triangle(5, 6, 7)
    )
}

function Hi() {
    return "Hi";
}

console.log(Hi())


function Hello() {
    return "Hello, " + Jim + "."
}

console.log(Hello("Jim"))

var numbers = [1, 2, 3, 4, 5]

function firstNumber(arr) {
    return arr[0];
}
console.log(firstNumber([1, 2, 3, 4]))


function triangle(num) {
    return triangle(num, num, num);
}
console.log(triangle(3))
console.log(triangleArea(3,3,3))

function concatenateThree(a,b,c) {
    return a + " " + b + " " + c;

}

function upperCase(string) {
    return string.toUpperCase()
}
console.log(upperCase("Hello"));


function areaOfCircle(num) {
    var Circle = num / 2;
    return Math.PI * Math.pow(Circle, 2);
}
console.log(a);

function perimeter(1, 2, 3, 4) {
    return 1 + 2 + 3 + 4;
}

console.log


function checkType(x) {
    return typeof;
}

function evenNumber(even) {
    return even % 2 === 0 && even > 0;
}

function greaterThanFive(){
    var userNumber = parseInt(prompt("Please enter a number"));
    return userNumber > 5;
}

function helloThere(string = 'stranger') {
    return 'Hello there, ' + string + '.';
}

var promptedResponse = prompt('Input string, plox.');
alert(helloThere(promptedResponse));

function arrayLength(array) {
    return array.length
}

function quotient(num1, num2) {
if(typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 / num2;
} else {
    return false;
    }
}

function input(str) {
    return typeof str == 'string' && str.length >= 8;
}

function number(num) {
    if(typeof num === "number" && !isNaN(num)) {
        return Math.floor(num);
    }
}

function counting(num) {
    for(var i = 1; i <= num; i++) {
        console.log(i);
    }
}