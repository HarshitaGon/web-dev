// var c = 300
let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
    console.log("Inner scope a: ", a);

}

console.log("global scope a: ", a, "\n");
// console.log(b);
// console.log(c);


// Nested Scope :-------------------------------------

function one() {
    const username = "Hitesh"

    function two() {
        const website = "youtube"
        console.log("Print Username using nested functions: ", username, "\n");
    }

    // console.log(website);

    two()
}

one()

// Nested if/else scopes :----------------------------------------

if (true) {
    const username = "hitesh"
    if (username == "hitesh") {
        const website = " youtube"
        console.log("display username + website using nested if : ", username +  website, "\n");
    }
}


// ++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++++++++++

console.log(addOne(5));


function addOne(num) {
    return num + 1
}


// addTwo(5) : error message - Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}

addTwo(5)
