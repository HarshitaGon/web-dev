// JavaScript is Dynamic type language.

console.log("******************Primitive Datatype************************");


// 7 Types : String, Number, Boolean, Null, undefined, symbol, BigInt

const score = 100;
const score_value = 100.3;

const is_logged_in = false;
const outside_temp = null;
let user_email; //let user_email = undefined;

const id = Symbol('123');
const another_id = Symbol('123');

console.log(id == another_id);

const big_number = 1234567894567867575354n;

console.log(typeof big_number);
console.log(typeof outside_temp);
console.log(typeof score_value);
console.log(typeof id);
console.log(typeof user_email);
console.log(typeof is_logged_in);



// Reference (Non-Primitive) : Array, Objects, Functions
console.log("******************Non-Primitive Datatype************************");

const heros = ["saktiman", "naagraj", "doga"]

let my_obj = {
    name : "Harshita",
    age : 20,
}

const my_function = function() {
    console.log("Hello World")
}

console.log(typeof my_function);
console.log(typeof my_obj);
console.log(typeof heros);
