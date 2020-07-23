let sum = 0;
let j;
let wackyArray = [];

const numArray = [ [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90] ];

function bigAssFunction (arr) { 
    arr.map(function(row, i) {
        rows = arr.map(function(row) { return row[i]; });
        wackyArray.push(rows);
        });
    for (i = 0; i < arr.length; i++) {
        wackyArray.push(arr[i].reduce(function(a, b) { return a + b }))
    };
    for (i = 0; i < wackyArray.length; i++) {
        if (typeof wackyArray[i] === 'object') {
            let erbject = wackyArray[i].reduce(function(a, b) { return (a + b )});
            wackyArray.splice(i, 1, erbject)
        }
    };   
    let biggest = wackyArray.reduce((a, b) => wackyArray[a] > wackyArray[b] ? a : b);
    console.log(wackyArray);
    console.log(biggest + ' is the largest sum in the array.');
}

bigAssFunction(numArray)

const bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

bigAssFunction(bigArray)
