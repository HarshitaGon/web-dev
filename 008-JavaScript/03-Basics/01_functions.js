function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H", "\n");
}

sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}


const result = addTwoNumbers(3, 8)

console.log("Result of add Two numbers : ", result, "\n");

function loginUserMessage(username = "Default User") {
    // if (username === undefined)
    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log("LoginUserMessage : ", loginUserMessage("Hitesh"), "\n");


function calculateCartPrice(val1, val2, ...num1) { //...num1 is rest operator
    return num1
}

console.log("CalculateCartPrice : ", calculateCartPrice(200, 400, 500, 200), "\n");

/* Rest parameter :- It allows a function to accept an indefinite number
   of arguments as an array. It is represented by three dots (…) followed by the
   parameter name and must be the last parameter in the function.
*/

const user = {
    username : "Hitesh",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`, "\n");
}

// handleObject(user)
handleObject ({
    username : "sam",
    price : 399
})

const myNewArray = [200, 400, 100, 600]
console.log("MyNewArray : ", myNewArray);


function returnSecondValue(getArray) {
    return getArray[1]
}

console.log("ReturnSecondValue of newArray: ", returnSecondValue(myNewArray), "\n");
console.log("ReturnSecondValue from an array in a function call : ", returnSecondValue([200, 300, 500, 1000]), "\n");



