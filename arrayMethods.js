const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits);


// Adding to the end
fruits.push('mango');
console.log(fruits);

//Adding to the beginning
fruits.unshift('elderberry');
console.log(fruits);

//REMOVING FROM ARRAYS

// removing from the end
fruits.pop();
console.log(fruits);

//remove from the beginning
fruits.shift();
console.log(fruits);

//removing from specific position
fruits.splice(1, 1);
console.log(fruits);

fruits.splice(0, 0, 'coconut');
console.log(fruits);

let array = [1, 2, 3, 4, 5, 6];
array.splice(2, 1);
console.log(array);

//modifying an item in an array
fruits[1] = "strawberry";
console.log(fruits);

// ITERATING OVER ARRAYS

// 1. Using for loop

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2. Using forEach 
fruits.forEach(function(fruit){
    console.log(fruit);
})

// OTHER COMMON ARRAY METHODS

//map
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);

// filter
let longfruits = fruits.filter(fruit => fruit.length > 7);
console.log(longfruits);

//find
let foundFruit = fruits.find(fruit => fruit === "cherry");
console.log(foundFruit);

// reduce
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + " " + fruit);
console.log(concatenatedFruits);

//includes
let hasCherry = fruits.includes("cherry");
console.log(`${hasCherry}`)

// combining arrays
//concatenating arrays
let moreFruits = ["Fig", "Grape"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

// Sorting Arrays
let sortedFruits = allFruits.sort();
console.log(sortedFruits);

// Reversing Array
let reversedFruits = allFruits.reverse();
console.log(reversedFruits);


const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers2.map(number => number * 2);
console.log(doubledNumbers);

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

//using map to create a new array with just the names of people
const names = people.map(person => person.name);
console.log(names);