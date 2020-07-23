const numArray = [ [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90] ];

let tempHolding = []

const funkshun = arr => {
    for (j = 0; j < arr.length; j++) {
        let jVal = 0;
        for (i = 0; i < arr.length; i++) {
            jVal += arr[i][j];
            let iVal = (arr[i].reduce(function(a, b) { return a + b }))
            tempHolding.push(iVal)
        }
        tempHolding.push(jVal);
    }
    let biggest = Math.max(...tempHolding);
    console.log(tempHolding);
    console.log(biggest + ' is the largest sum in this array.')
}

funkshun(numArray)

const bigArray =
[ [ 887, -541, -430, -590, 117, 172, -319, -18 ],
  [ -269, 964, 209, 840, -456, 156, 365, -568 ],
  [ 289, -41, 488, 198, 240, 124, -427, 214 ],
  [ 452, 894, 968, -149, 683, 977, 741, -805 ],
  [ 181, -714, -950, 107, 800, 751, -143, 380 ],
  [ 152, 493, 707, 914, 37, 356, -625, 608 ],
  [ -345, 906, 83, 676, 723, 381, 557, -183 ],
  [ 199, -943, -710, 565, 193, 315, 281, 245 ] ];

  funkshun(bigArray)
 console.log(tempHolding.sort())
