const name = "hitesh"
const repo_count = 50

// console.log(name + repo_count + " value");  :- outdated way of concatinating the strings.


/* String interpolation is a programming technique that replaces placeholders
   in a string literal with their corresponding values.*/
console.log(`hello my name is ${name} and my repo count is ${repo_count} \n`);



const game_name = new String('hitesh-hc')

console.log(game_name[0]);
console.log(game_name.__proto__);

console.log(game_name.length);
console.log(game_name.toUpperCase());
console.log(game_name.charAt(2));
console.log(game_name.indexOf('t'));

const newString = game_name.substring(0, 4);
console.log(newString);

const anotherString = game_name.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Hietsh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

/*
   * The trim() method of String values removes whitespace from both ends of
     this string and returns a new string, without modifying the original string.

   * The trimStart() method of String values removes whitespace from the
     beginning of this string and returns a new string, without modifying the original string.

   * The trimEnd() method of String values removes whitespace from the end of
     this string and returns a new string, without modifying the original string.
*/

const url = "hhtp://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));





