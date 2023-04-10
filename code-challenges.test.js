// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create , removes the first item from the array and shuffles the remaining content. #/// It must be a random shuffle

// a) Create a test with an expect statement using the variable provided.### 2 expect statements ####
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("removeFirstIndexAndShuffle", () => {
  it("takes in an array, removes the first item from the array, and shuffles the remaining content",
  () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(removeFirstIndexAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(removeFirstIndexAndShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
})

// Test Failed: 
//  FAIL  ./code-challenges.test.js
  //   ReferenceError: removeFirstIndexAndShuffle is not defined


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

// Pseudo 

// Input: an array
// Output: removes the first item from the array and shuffles the remaining content
// Expected output: ["yellow", "blue", "pink", "green"]

// Process

// Declare a function called removeFirstIndexAndShuffle
// Set the parameter to (arr)
// Use the method .shift() to remove the first index of the array
// Declare a new variable called currentArray that is the new value after shift removed the first index
// Set currentArray to arr.sort
// For the sort() method set the condition with Math.random() to shuffle the index positions
// Return currentArray

const removeFirstIndexAndShuffle = (arr) => {
  arr.shift()
 {
  const currentArray = arr.sort(() => Math.random())
  return currentArray
  }

} 
  
// Test Passed

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided. 

describe("sumOfValues", () => {
  it("takes in an object that contains up votes and down votes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
    expect(sumOfValues(votes1)).toEqual(11)
    expect(sumOfValues(votes2)).toEqual(-31)
  })
})

// Test Failed:
//  FAIL  ./code-challenges.test.js
//  ● sumOfValues › takes in an object that contains up votes and down votes
//     ReferenceError: sumOfValues is not defined


// b) Create the function that makes the test pass.

// Pseudo 
 
// Input: an object with two key:value pairs
// Output: the sum of their values
// Expected output: 11

// Process

// Declare a function called sumOfKeyValues with the parameter (obj)
// Declare a variable called newValue equal to obj.upVotes minus obj.downVotes 
// This will access the value of both keys, and subtract downVotes value from upVotes values
// Return newValue

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31
const sumOfValues= (obj) => {
  const newValue = obj.upVotes - obj.downVotes
  return newValue
}

// I ran out of time, but I was wanting to see if I could reference obj.key1 - obj.key2 instead of hard coding for upVotes and downVotes


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.### 1 expect statement #### but two tests, Comment the first expect out before re-writing the expect for the second variable ###

describe("noDoubles", () => {
  it("takes in two arrays as arguments", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
  expect(noDoubles(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// Test failed:
//  FAIL  ./code-challenges.test.js
//  ● noDoubles › takes in two arrays as arguments
      //  ReferenceError: noDoubles is not defined

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Pseudo

// Input: two arrays
// Output: one array with only unique values
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// Process
// Declare a function called noDoubles
// Declare a new variable call joinData set equal to arr1.concat(arr2), this will join the elements from both arrays into one array
// Iterate through the joinData array using .filter to remove duplicate string values
// I can set my .filter to (item, index) 
// Return using the condition of joinData.indexOf(item) === index


const noDoubles = (arr1, arr2) => {
const joinData = arr1.concat(arr2)
  return joinData.filter((item, index) => joinData.indexOf(item) === index)  
}

// Test Passed