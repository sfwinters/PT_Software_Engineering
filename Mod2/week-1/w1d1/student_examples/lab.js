let sum = 0;
let j;
let wackyArray = [];

const numArray = [ [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90] ];

numArray.map(function(row, i) {
    let rows = numArray.map(function(row) { return row[i]; });
    wackyArray.push(rows);
});
for (i = 0; i < numArray.length; i++) {
    wackyArray.push(numArray[i].reduce(function(a, b) { return a + b }))
};
for (i = 0; i < wackyArray.length; i++) {
    if (typeof wackyArray[i] === 'object') {
        let erbject = wackyArray[i].reduce(function(a, b) { return (a + b )});
        wackyArray.splice(i, 1, erbject)
    }
}   
let biggest = wackyArray.reduce((a, b) => wackyArray[a] > wackyArray[b] ? a : b)


console.log(wackyArray)
console.log(biggest + ' is the largest sum in the array.')