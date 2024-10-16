console.log("*******************unpredictable output***************************");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
    The reason is that an equality check == and comparisons > < >= <=
    works differently.
    Compariosons convert null to a number, treating it as 0.
    That's why(3) null >= 0 is true and (1) null > 0 is false.
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// try to avoid these type of code.

/*
    Strict Equality(===) :- It checks whether the operands are equal in both value and datatype.
                            This operator doesnot perform any type casting like (==) operator.
*/
console.log("*****************************************************************");
console.log("2" === 2);