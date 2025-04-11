// for loop-------------------------------------------------

for (let i = 0; i <= 5; i++) {
    const element = i;

    if (element == 5)
        console.log("5 is the best number");

    console.log(element);
}

for (let i = 0; i <= 3; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 0; j <= 5; j++) {
        console.log(`Inner loop value : ${j} and inner loop ${i}`);
    }
}

console.log(`\nTable printing of 1 to 5 :-`);

for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log("\n");

let myArray = ["flash", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


//break statement ---------------------------------------

console.log("\n");

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        console.log(`\nDetected 5`);
        break;
    }

    console.log(`value of i is ${i}`);
}

//coninue statement -----------------------------------------------

console.log("\n");

for (let i = 0; i < 5; i++) {
    if (i == 3) {
        console.log(`Detected 5`);
        continue;
    }

    console.log(`value of i is ${i}`);


}