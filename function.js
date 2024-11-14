// Function
// declaration

// function functionName(parameters) {
//     //code to be executed
// }

function greet(name) {
    console.log("Hello, " + name);
}

greet("martins");

//FUNCTION EXPRESSION
// const functionName = function(parameters) {
//     code to be executed
// };

const greetUser = function(name) {
    console.log("Hello, " + name);
}

greetUser("John");

function add(a, b) {
    return a + b;
}

const sum = add(4, 5)
console.log(sum);

function multiply(a, b){
    return a * b;
}

const product = multiply(15, 3);
console.log(product);

function subtract(a, b) {
    return a - b;
}
const diff = subtract(20, 100);
console.log(`${diff} SUBTRACTION`)

function division(a, b) {
    return a / b;
}
const quotient = division(1000, 50);
console.log(`${quotient} DIVISION`);

function greetuser(name, course) {
    console.log("Hello" + " " + name);
}
greetuser('John Doe', "Backend");

// FUNCTION EXPRESSIOPN

const greetings = function(name) {
    console.log("Hello, " + name);
}

greet("John");

const greetings2 = function(name, course, school) {
    console.log(`Hello ${name}! I'm a ${course} developer at ${school}`)
}

greetings2("Lyon", "Backend", "New Horizons")

