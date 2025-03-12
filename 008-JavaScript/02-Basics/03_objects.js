/* Singleton :- A Singleton is a special type of object or  design pattern
                that can only be created once and used throughout the program.
                We can implement it using a constructor method.
                e.g : const JsUser = new Object() */

/* Object.create() :- JavaScript object.create() method is used to
                      create a new object with the specified prototype object and properties.
                      It is also called as a constructor method  */

//Object literals :--------------------------------------------------------

const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudhary",
    //mySym : "myKey1",
    [mySym] : "myKey1",
    age : 18,
    location: "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastloginDays : ["Monday", "Saturday"]
}

console.log("Email of JsUser (access using . notation) : ", JsUser.email);
console.log("Email of JsUser (access using [] notation) : ", JsUser["email"]);
console.log("full name of JsUser : ", JsUser["full name"], "\n");

/* drawback of accessing element using (.) notation:- can't access element like full name
                                              bcz declared under "..."
   So access elemt by [] notation is workable.  */

// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); //output : string n here we want to use mySym as a symbol.
//And using [] brackets, Defining a symbol as key element in object is correct syntax.

console.log("mySym of JsUser : ", JsUser[mySym]);
console.log("type of mySym : ", typeof JsUser[mySym], "\n");


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // comment out whenever want to run freeze method.

/* The Object.freeze() method is used to freeze an object.
   Freezing an object does not allow new properties to be added to the object
   and prevents removing or altering the existing properties. */

JsUser.email = "hitesh@microsoft.com" //cannot modified bcz of freeze method.
console.log("JsUser : ", JsUser, "\n");

// adding a function to obj JsUser------------------->

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`); //String Interpolation
}

/*  String Interpolation : String interpolation is a way to insert variables
                           or expressions inside a string dynamically using
                           template literals (``` `) instead of traditional string concatenation.
*/

/*  console.log(JsUser.greeting);
    Output : [Function (anonymus)]
             it means function does not executed, only return the reference of the function.
*/
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


