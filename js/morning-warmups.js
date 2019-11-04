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


var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function heightOrder(height) {
    height.sort(function(a,b) {
        return a.heightInMM - b.heightInMM; {
        }
    });
}

console.log(heightOrder(hamsters));

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

function createPersonObject(name, age) {
    var person = {};
    person.name = name;
    person.age = age;

    return person
}
    for (var i=1; i < 101; i++) {
        if (i % 15 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }

    function stringFive(five) {
        if(five === "five"){
            return 5
            }
    }

var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

    function mostOranges(carts) {
        var winner = carts[0];
        carts.forEach(function(cart) {
            if(cart.oranges > winner.oranges) {
                winner = cart;
                return winner;
            }
        });
    }

    console.log(mostOranges(shoppingCarts));


var students = [
    {
        name: "Mary",
        grade: 10,
        gpa: 3.7,
        isRegistered: true
    },
    {
        name: "Tim",
        grade: 12,
        gpa: 3.2,
        isRegistered: false
    },
    {
        name: "Ellie",
        grade: 9,
        gpa: 4.0,
        isRegistered: false
    },
    {
        name: "Alex",
        grade: 10,
        gpa: 3.9,
        isRegistered: true
    }
];

function checkRegistration(studentArray) {
    var bucket = [0];
        studentArray.forEach(function(student) {
            if(!student.isRegistered) {
                bucket.push(student)
            }
        });
    return bucket;
}

console.log(checkRegistration(students));


// Facebook to keep connected with friends and family
// Twitch to watch when bored
// Youtube to watch when bored

