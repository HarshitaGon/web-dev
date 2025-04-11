const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website \n`);
    }
}

/*
    This keyword :- The this keyword in JavaScript refers to the object that is executing the current function.
                    The value of this depends on how and where the function is called.
*/


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// This in global context :----------------------------------------

console.log("This in global context : ", this);

/*
    in above line of code :-
    Output (in Browser): Window object
    Output (in Node.js): Global object
*/


// regular functions :---------------------------------

function chai() {
    let username = "hitesh"
    console.log("This in regular function : ", this.username);
}

chai()

/*
    Explanation:

    * function chai() is a regular function.
    * In a regular function, this refers to the calling object.
    * But since chai() is called in the global scope (not as an object method), this refers to:
        In Browser: The window object
        In Node.js: The global object
    * Since username is defined inside the function and not attached to this, console.log(this.username); returns undefined.
*/

// Arrow Functions :---------------------------------------

const chaii = () => {
    let username = "hitesh"
    console.log("This in arrow function : ", this.username);
}

chaii()

/*
    Explanation:

    * chaii() is an arrow function.
    * Arrow functions do not have their own this. Instead, they inherit this from their lexical (surrounding) scope.
    * In this case, chaii() is defined in the global scope, so this still refers to the global object (window in browsers, global in Node.js).
    * Since username is a local variable inside the function and not attached to this, output remains undefined.
*/
//--------------------------------------------------------------------------------------------------------


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// ** Implicit return of value :-------------------------------

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "hitesh"})

/*
    Explanation of above line of code :

    When returning an object, you must wrap it in parentheses () to prevent JavaScript from treating {} as a function body.
    Without parentheses, {} is considered the function block, and it won’t return anything.
*/

console.log("addTwo() using arrow notation : ", addTwo(3, 4));



