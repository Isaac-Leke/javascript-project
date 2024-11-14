//Arithmetic Operators
// ADDITIONS

let sum = 5 + 3;
console.log(sum);

// SUBTRACTIONS
let difference = 10 - 4;
console.log(difference);

//MULTIPLICATION
let product = 7 * 2;
console.log(product);

// division
let quotient = 20 / 5;
console.log(quotient);

// Remainder 
let remainder = 10 % 3;
console.log(remainder);

// Power
let power = 2**10;
console.log(power);

// ASSIGNMENT OPERATORS
// Assignment
let x = 5;
console.log(x);
// Addition assignments
let y = 5;
y += 2;
console.log(y);
//  subtraction assignments
let z = 10;
z -= 2;
console.log(z);


//LOGICAL OPERATORS
let isTrue = (5 > 3 && 3 > 5);//AND operator
console.log(isTrue);

let is_True = (5 > 3 || 3 > 5);//OR operator
console.log(is_True);

let isFalse = !(5 > 3);// NOT operator
console.log(isFalse);

//CONTROL STRUCTURES
//IF statement
let xx = 4;

if (xx > 0) {
    console.log("x is positive");
}

//IF... ELSE statement
if(xx > 0) {
    console.log('x is postive');
} else {
    console.log("x is not positive");
}

//Else if statement

if (xx > 0) {
    console.log('x is postive');
} else if (x === 0) {
    console.log("x is zero");
} else {
    console.log('x is negative');
}

let temperature = 15;
if (temperature > 25) {
    console.log("it's a hot day!");
} else if (temperature < 15) {
    console.log("it's a cold day!");
} else {
    console.log("it's a warm day");
}

let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("it's a banana!");
        break;
    case "apple":
        console.log("it's an apple!");
        break;
    case "orange":
        console.log("it's an orange!");
        break;
    default:
        console.log("unknown fruit");
}