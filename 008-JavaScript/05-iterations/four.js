//for...in loop-----------------------------------------------

const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = []