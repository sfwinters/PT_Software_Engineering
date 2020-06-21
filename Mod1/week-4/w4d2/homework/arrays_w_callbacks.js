//Array Methods with Callbacks
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
const isGreater = num => num >= 0
console.log(nums.every(isGreater)) //true
// determine if every word shorter than 8 characters
const isShorter = word => word.length < 8
console.log(panagram.every(isShorter)) //true

// Filter
// filter the array for numbers less than 4
const lessThanFour = num => num < 4     //[1, 2, 3, 0]
console.log(nums.filter(lessThanFour))
// filter words that have an even length
const evenLength = word => word.length % 2 === 0    //['over', 'lazy']
console.log(panagram.filter(evenLength))

// Find
// Find the first value divisible by 5
const divByFive = num => num % 5 === 0
console.log(nums.find(divByFive))       //5
// find the first word that is longer than 5 characters
const longerThanFive = word => word.length > 5
console.log(panagram.find(longerThanFive))          //undefined (all 5 or fewer)

// Find Index
// find the index of the first number that is divisible by 3
const divByThree = num => num % 3 === 0
console.log(nums.findIndex(divByThree))             //2
// find the index of the first word that is less than 2 characters long
const lessThanTwo = word => word.length < 2
console.log(panagram.findIndex(lessThanTwo))        //-1   (all 3 or more)

// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach(num => console.log(num * 3))           
// console.log each word with an exclamation point at the end of it   
panagram.forEach(word => console.log(word + '!')) 

// Map
// make a new array of each number multiplied by 100
let newNums = []
newNums.push(nums.map(num => num * 100))
console.log(newNums)
// make a new array of all the words in all uppercase
let bigUps = []
bigUps.push(panagram.map(word => word.toUpperCase()))
console.log(bigUps)

// Some
// Find out if some numbers are divisible by 7
const divBySeven = num => num % 7 === 0
console.log(nums.some(divBySeven))          //true
// Find out if some words have the letter a in them
const ayyyy = word => word.includes('a')
console.log(panagram.some(ayyyy))           //true

