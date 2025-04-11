// for of loop ---------------------------------------------
/*
    The for...of statement executes a loop that operates on a sequence of values
    sourced from an iterable object. Iterable objects include instances of built-ins
    such as Array, String, TypedArray, Map, Set, NodeList.
*/

const arr = [1, 2, 3, 4, 5]

for (const index of arr) {
    console.log(index);
}

const greetings = "hello world!"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}


// Maps--------------------------------------------------------
/*
    The Map object holds key-value pairs and remembers the original insertion
    order of the keys. Any value (both objects and primitive values) may be used
    as either a key or a value.
*/

console.log(`\n`);

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")  //this will not add to map bcz map is known for unique key value pairs.

console.log(map);

console.log(`\nprint map[key:value] using for....of loop :-`);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':', value);
// } :--- myObject is not iteratbale bcz for..of loop isn't working.