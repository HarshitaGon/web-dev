const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// })

// another way to write for each loop by arrow function-----------

// coding.forEach( (val) => {
//     console.log(val);
// })

// Another way--------------------------

function printMe(item) {
    console.log(item);
}

coding.forEach(printMe);

console.log(`\n`);

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

console.log(`\n`);

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})





