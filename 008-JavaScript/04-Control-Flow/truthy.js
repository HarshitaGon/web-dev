const userEmail = []

if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
}

/*
    Falsy values :-
        false, 0, -0, BigInt, 0n, "", null, undefined, NaN.

    Truthy values :-
        "0", 'false', " ", [], {}, function(){}
*/

// check if array is empty?????????????????????????????
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// check object if empty???????????????????????????????
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined
/*
    In simpler terms, it provides a concise way to set a default value for a
    variable if that variable is currently null or undefined.

    Syntax :-
    leftExpr ?? rightExpr

    How it works:

    1) It evaluates the leftExpr (the expression on the left side).
    2) If leftExpr is not null or undefined, the operator returns the value of leftExpr.
    3) If leftExpr is null or undefined, the operator returns the value of rightExpr.
*/

let val1;
// val1 = 5 ?? 10 :- output - 5
// val1 = null ?? 10 :- output - 10
// val1 = undefined ?? 15 :- output - 15
val1 = null ?? 10 ?? 20
console.log(val1);

// Ternary operator :- condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");


