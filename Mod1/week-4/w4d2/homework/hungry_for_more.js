//Hungry For More
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Reduce
// Add all the numbers in the array together using the reduce method
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(nums.reduce(reducer));      //55
// concatenate all the words using reduce
const runOn = panagram.reduce(function(previous, current) {
    return previous + current
  })
  console.log(runOn)

// Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
console.log(nums.sort())    //The output is what I expected
// Try to sort without any arguments, do you get what you'd expect with the words array?
console.log(panagram.sort()) //I was expecting it to be sorted either alphabetically or by length but it was neither
// Sort the numbers in ascending order
console.log(nums.sort(function plusOne(num1, num2){return (num1 - num2)}))
// Sort the numbers in descending order
console.log(nums.sort(function minusOne(num1, num2){return (num2 - num1)}))
// Sort the words in ascending order
console.log(panagram.sort())
// Sort the words in descending order
console.log(panagram.reverse())

// Array Methods Challenge Problems
// isPanagram
// Using the following array - test whether each letter a-z (case insensitive) is used at least once
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
alphabet = alphabet.split('')
// console.log(alphabet)
let usedLetters = [];
function findLetter(array1, array2){
    for (letter of array1) {
        for (word of array2) {
            if (word.includes(letter) && (usedLetters.includes(letter) === false)) {
                usedLetters.push(letter)
            } 
        }
    }
}
findLetter(alphabet, panagram);
console.log(usedLetters.length)     //26; one instance for each letter of the alphabet
console.log(usedLetters)            //double checked that all letters are present

// Working with data
// filter for products with a price that is less than 10, using the array below:
const products = [
      {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
      },
      {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
      },
      {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
      },
      {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
      },
      {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
      },
      {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
      },
      {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
      },
      {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
      },
      {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
      },
      {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
      },
      {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
      },
      {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
      },
      {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
      },
      {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
      },
      {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
      },
      {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
      },
      {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
      },
      {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
      },
      {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
      },
      {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
      },
    ]

// const bargainBin = products.filter(tool => tool['price'] < 10);
// console.log(bargainBin)

// sort alphabetically by product name
let catalog = []
function debbieDowner() {
    for (i = 0; i < products.length; i++) {
        let sku = products[i]['name'];
        catalog.push(sku.toLowerCase())
    }
}
debbieDowner(products)
console.log(catalog.sort())

