//A loop is a programming constuct used to repea a block of code multiple times until a specific condition is met. loop helps automate repetitive tasks.

// for (intialization; condition; increment) {
//     //code to be executed
// }

// Initialization: let i = 0 sets the starting point
// Condition: i < 5 keeps the loop running while i is less than 5;
// Increment: i++ increases i by 1 after each loop iteration;

for(let i = 0; i < 5; i++) {
    console.log(i); // outputs: 0, 1, 2, 3, 4
}

const fruits = ["apple", 'banana', 'orange', 'mango', 'grapes'];

for (let i = 0; i < fruits.length; i++) {
    if(i === 3) break;
    console.log(fruits[i]);
}

// while loop: is used when the number of iteration is not known befroehand. it keeps running as long as the condition is true

// while(condition) {
//     //code to be executed
// }

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//break;
for (let i = 0; i < 6; i++) {
    if (i === 3) break;
    console.log(`${i} for break statement`);
}

//continue
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(`${i} for continue statement`);
}


for (let i = 0; i < fruits.length; i++) {
    if (i === 2) continue;
    console.log(fruits[i]);
}


