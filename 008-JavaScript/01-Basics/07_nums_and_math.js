console.log("****************************Numbers*****************************");

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

/* The toFixed() method of Number values returns a string representing this
number using fixed-point notation with the specified number of decimal places.*/

const otherNumber = 123.8965
console.log(otherNumber.toPrecision(3));

const hunderds = 1000000
console.log(hunderds.toLocaleString('en-IN'));

/* The toLocaleString() method of Date instances returns a string with a
language-sensitive representation of this date in the local timezone. */


console.log("*************************Maths***********************************");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);









