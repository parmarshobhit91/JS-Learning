let a = 300
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
//   console.log(`INNER: ${a}`);
  
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "shobhit"

    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

// ------------ Interesting ----------------

// this is function
console.log(addOne(5));
function addOne (num) {
    return num + 1
}
// this is also function but programmers say it a expression
addTwo(5)
const addTwo = function(num) {
    return num + 2
}

