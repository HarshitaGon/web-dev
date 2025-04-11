// if

const isUserLoggedIn = true
const temperature = 41

if (2 == "2") {
    console.log("executed if 2 is equal to 2");
}


if (temperature < 50) {
    console.log("executed if temperature less than 50");
} else {
    console.log("executed else temperature is greater than 50");

}

console.log("execute bcz out from if-else statement---------------------");

// comparision operator : <, >, <=, >=, ==, !=, ===(it checks also the type...)

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}\n`);
}

// console.log(`User power: ${power}`);

const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");  --not a standard way of coding

if (balance < 500) {
    console.log("balance less than 500");
} else if (balance < 750) {
    console.log("balance less than 750");
} else if (balance < 900) {
    console.log("balance less than 900")
} else {
    console.log("less than 1200");
}

console.log("\nAnother Example :-------------------------------------------\n");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow user to buy course if user have : LoogedIn & DebitCard");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In");
}


