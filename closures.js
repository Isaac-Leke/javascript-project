// CLOSURES ---- a feature in Javascript where an inner function has access to the variable of its outer function, even after the outer function has finished executing


function outerFunction(){
    const outerVariable = "I am from outer Function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

function createCounter(){
    let i = 0;

    for (let i = 0; i <= 5; i++){
        if (i <= 5) {
            function result() {
                return i;
        };
    }
   

    return result();

}}

const counterFunction = createCounter();
console.log(counterFunction);
console.log(counterFunction);
console.log(counterFunction);