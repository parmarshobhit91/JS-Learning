// Immediately Invoked Function Expressions (IIFE)

// It is very important to end the function with 
// semicolon without it, the function will give 
// error.....

(function chai() {
    console.log(`DB CONNECTED`);
})();


((name) => {
    console.log(`DB CONNECTED ${name}`);    
}) ('shobhit');