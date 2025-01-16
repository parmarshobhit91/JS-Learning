// filter method in javascript

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNums.filter( (num) => num > 4 )

// const newNums = myNums.filter( (num) => { 
//     return num > 4
// })
// console.log(newNums);

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums);

const books = [
    {
      title: "To Kill a Mockingbird",
      genre: "Fiction",
      edition: "1st",
      publish: 2000
    },
    {
      title: "The Great Gatsby",
      genre: "Classic",
      edition: "3rd",
      publish: 2001
    },
    {
      title: "1984",
      genre: "Dystopian",
      edition: "2nd",
      publish: 2002
    },
    {
      title: "The Catcher in the Rye",
      genre: "Classic",
      edition: "1st",
      publish: 2003
    },
    {
      title: "The Hobbit",
      genre: "Fantasy",
      edition: "Anniversary",
      publish: 2004
    }
  ];
  
  let userBooks = books.filter( (bk) => bk.genre === "Classic" )
   userBooks = books.filter( (bk) => { 
    return bk.publish >= 2003 && bk.genre === "Fantasy"})
  console.log(userBooks);
  