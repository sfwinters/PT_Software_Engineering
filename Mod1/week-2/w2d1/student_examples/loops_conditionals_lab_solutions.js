let firstVariable = 'Hello World';
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = 'root beer';
console.log(firstVariable);

const myName = 'Sarah';
console.log('Hello, my name is ' + myName);


const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

console.log(a < b);
console.log(c < d);
console.log('Peanut' === 'Peanut');
console.log(a + b !== c);
console.log(a + a !== d);
console.log(e === 'Jelly Bean');
console.log(48 == '48');
console.log('e' !== 'Eh');

let animal = 'pig';
if (animal === 'cow') {
    console.log('mooooo');
} else {
    console.log('Hey! You\'re not a cow.');
}

let oldEnoughToDrive = 24;
if (oldEnoughToDrive >= 16) {
    console.log('Here are the keys')
} else {
    console.log('Sorry, you\'re too young')
}

for (i = 0; i <= 10; i ++) {
    console.log(i)
}

for (i = 500; i >= 50; i--) {
    console.log(i)
}

for (i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i + ' is an odd number.')
    }
}

for (i = 1; i <= 100; i ++) {
    if (i % 5 === 0) {
        console.log('I found a ' + i + '. High five!')
    } else if (i % 3 === 0) {
        console.log('I found a ' + i + '. Three is a crowd.')
    }
}
let balance=0;
for (i = 1; i <= 10; i++) {
    balance = balance + i
}
console.log(balance);

for (i = 1; i <= 100; i++){
    balance = balance + i;
    }

let finalBalance = balance * 2;
console.log(finalBalance);

const boardSize = 8;
let grid = '';
for (i = 0; i < boardSize; i++){
    for (j = 0; j < boardSize; j++) {
        if ((i + j) % 2 === 0) {
            grid += '#';
        }else {
            grid += ' ';
        }
    } grid += '\n';
}
console.log(grid);

