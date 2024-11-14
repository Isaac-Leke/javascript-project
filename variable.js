var name = 'martins';
console.log(name);

let number = 12;
let int = 59;
let float = 2.3;
let isMarried = false;
let isSingle = true;
var isMan = Boolean;
let age = undefined;
var isTall;
// var isShort = "";



console.log(number, int, float);
console.log(`this is ${name} and he is ${number} years old`);
console.log(`This is ${name}. Is he married? ${isMarried}`);
console.log(age, isMan, isTall);

var info = ['martins', 24, true, null];
console.log(info);
console.log(info["0"]);
console.log(info["1"]);
console.log(info["2"]);
console.log(info["3"]);

const user = {
    id: "John",
    firstname: "Doe",
    lastName: "John",
    username: "johndoe123",
    email: "johndoe@example.com",
    password: "securePassword123",
    phone: "+1234567890",
    address: {
        street: "123 Main St",
        city: "Lagos",
        state: "Lagos",
        postalCode: "100001",
        country: "Nigeria"
    },
    dateOfBirth: "1990-01-01",
    isActive: true,
    roles: ['user', 'admin'],
    lastLogin: '2024-10-14T10:30:00Z'

};

const dataTypes = {
    primitiveDataTypes: {
        numbers: 12,
        strings: "Hello World",
        unDefined: undefined,
        boolean: true,
        bigint: BigInt,
        Null: null,
        symbol: Symbol
    },
    nonprimitiveDataTypes: {
        Arrays: ["Tosin", 12],
        Objects: {
            name: 'Tosin',
            Age: 45
        }
    }
};

console.log(dataTypes);