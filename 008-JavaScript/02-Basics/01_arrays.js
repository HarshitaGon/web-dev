// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log("value of 0th index: ", myArr[0], "\n");

/*
    In JavaScript, arrays aren't primitives but are instead
    Array objects with the following core characteristics:

    1)JavaScript arrays are resizable and can contain a mix of different data types.
    2)JavaScript array-copy operations create shallow copies.
     (All standard built-in copy operations with any JavaScript objects create shallow copies,
     rather than deep copies).

*/

//Array methods

myArr.push(6);
myArr.push(7);
console.log("push 6, 7 on myArr: ", myArr);

myArr.pop();
console.log("pop last value: ", myArr, "\n");

myArr.unshift(9);
console.log("unshift 9 means 9 value added to 0th index of myArr: ", myArr);

myArr.shift();
console.log("shift operation pop that first element of the array : ", myArr);

myArr.shift();
console.log("shift: ", myArr, "\n");

console.log("element 9 in included in myArr ?? : ", myArr.includes(9));
console.log("index of element 3 : ", myArr.indexOf(3), "\n");

const newArr = myArr.join();

console.log("original arr: ", myArr, "\n");
console.log("after join operation, new arr: ", newArr);
console.log("type of new arr: ", typeof newArr, "\n"); //here join convert the type of array to string.

/* slice and splice method :- -------------------------------------------------------
    Use slice() when you want to extract elements without modifying the original array.
    Use splice() when you want to modify the array (add, remove, replace elements).
*/

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);
console.log("after slice operation, myn1 : ", myn1, "\n");

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);

console.log("after splice operation, myn2 : ", myn2, "\n");







