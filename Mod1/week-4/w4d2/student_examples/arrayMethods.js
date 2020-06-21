// const iceCreams = ['Vanilla', 'Chocolate', 'Strawberry', 'Rocky Road'];
// const updatedIceCreams = iceCreams.map(flavor => {
//     return flavor + ' hello';
// });

// console.log(updatedIceCreams)

// iceCreams.forEach(flavor => {
//     return flavor += ' hello'
// })

// console.log(iceCreams)

// const originalArray = [2, 4, 6, 8, 10];
// const newNumArray = originalArray.map(elem => {
//     return elem * 2
// })
// console.log(newNumArray)

const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const isEven = (num => num % 2 === 0)
// console.log(sequence.every(isEven))

// const evenNums = [2, 4, 6, 8, 10, 12]
// console.log(evenNums.every(isEven))

console.log(sequence.filter(elem => elem % 2 === 0));