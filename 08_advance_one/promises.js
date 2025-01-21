const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 2000);
});
promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (res, rej) {
  setTimeout(() => {
    console.log("async task 2");
    res();
  }, 2000);
}).then(function () {
  console.log("async2 resolved");
});

const promiseThree = new Promise(function (res, rej) {
  setTimeout(() => {
    res({ username: "chai", email: "chai@example.com" });
  }, 2000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (res, rej) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      res({ username: "shobhit", password: "123" });
    } else {
      rej("ERROR: Something went wrong");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected.");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JS", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 2000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// getAllUsers();

fetch('https://api.github.com/users/parmarshobhit91')
.then(function(response){
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error)=>{
    console.log(error);
    
})


