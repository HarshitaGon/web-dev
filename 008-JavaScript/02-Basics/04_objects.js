//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "harsh"
tinderUser.isLoggedIn = false

console.log("tinderUser : ", tinderUser, "\n");

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

console.log("regularUser : ", regularUser.fullname);
console.log("firstname of regularUser : ", regularUser.fullname.userfullname.firstname, "\n");


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)

/*  The Object.assign() method is used to copy the values and properties
    from one or more source objects to a target object.
    It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target.
*/

const obj3 = {...obj1, ...obj2}

console.log("Concatinate obj1 and obj2 : ", obj3, "\n");

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "a@gmail.com"
    },
    {
        id : 3,
        email : "d@gmail.com"
    }
]

console.log("email of user 3 : ", users[2].email, "\n");

console.log("keys of tinderUser : ", Object.keys(tinderUser));
console.log("values of tinderUser : ", Object.values(tinderUser));
console.log("entries of tinderUser : ", Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'), "\n");

/*  The hasOwnProperty() method in JavaScript checks if an object has a
    specific property as its own (not inherited). */



// Object destructuring :----------------------------------------
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

console.log("after destructuring : ", instructor, "\n");



// JSON Syntax :-------------------------------------

/*
    {
        "name": "hitesh",
        "coursename": "js in hindi",
        "price": "free"
    }
*/
