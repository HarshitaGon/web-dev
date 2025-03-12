const marvel_heros = ["thor", "ironman", "spriderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log("after push dc_heros to marvel_heros: ", marvel_heros, "\n");

// console.log("elemnt of 3rd index of marvel_heros: ", marvel_heros[3], "\n");

// console.log("elemnt of [3][1] index of marvel_heros: ", marvel_heros[3][1], "\n");

const allHeros = marvel_heros.concat(dc_heros)

console.log("concatinate marvel_heros and dc_heros: ", allHeros, "\n");

const all_new_heros = [...marvel_heros, ...dc_heros];

console.log("combine marvel_heros and dc_heros by spread method: ", all_new_heros, "\n");


const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 2]]]

const real_another_array = another_array.flat(Infinity)

// The flat() method concatenates sub-array elements.

console.log("After concatenates sub-array of another_array: ", real_another_array, "\n");

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"})); //Intersting......

/*
    1) Array.isArray() :- The isArray() method in JavaScript is used to determine whether a given value is an array or not.

    2) Array.from() :- The Array.from() method creates an array from an iterable object
    (like a string, array-like object, or Set).

    ** What happens in Array.from({name: "hitesh"})??????

    Here, {name: "hitesh"} is a plain object, which is not iterable (like arrays or strings).
    Since Array.from() expects an iterable or array-like object, JavaScript returns a empty Array.

    Use Object.values(), Object.keys(), or Object.entries() to work around this.

    **Plain Object :- 1) A plain object is an instance of Object, usually created using {} or new Object().
                      2) Stores data as key-value pairs.

    **Iterable :- 1) Iterables are iterable objects (like Arrays).
                  2) Iterables can be accessed with simple and efficient code.
                  3) Iterables can be iterated over with for..of loops

*/


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

/*
    3) Array.of() :- The Javascript array.of() method is an inbuilt method in JavaScript
    that creates a new array instance with variables present as the argument of the method.
*/


