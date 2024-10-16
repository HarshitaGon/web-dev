console.log("***************************Conversion******************************");

let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let value_in_number = Number(score)
console.log(typeof value_in_number);
console.log(value_in_number); //NaN : Not a Number

/*
    "33" => 33
    "33abc" => NaN
    true => 1; false => 0
*/

let is_logged_in = "harshita"

let boolean_is_logged_in = Boolean(is_logged_in)
console.log(boolean_is_logged_in);

/*
    1 => true; 0 => false
    "" => false
    "harshita" => true
*/

let some_number = 33

let string_number = String(some_number)
console.log(string_number);
console.log(typeof string_number);



console.log("****************************Operations*****************************");

let value = 3
let negative_value = -value
console.log(negative_value);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "hello"
let str2 = " harshita"

let str3 = str1 + str2

console.log(str3);

// Following Operations should not be followed because these are not readable

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let game_counter = 100
++game_counter;
console.log(game_counter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


