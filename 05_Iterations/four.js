// for in loop

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by app"
}

// for (const key in myObject) {
//        console.log(`${key} name is ${myObject[key]}`);
       
// }

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
    
}

// for in loop does not work on map