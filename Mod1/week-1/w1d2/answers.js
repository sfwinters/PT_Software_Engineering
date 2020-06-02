//Section 1
/*1. DRY stands for "Don't Repeat Yourself."" Unnecessarily repeating commands clutters up the code and makes it more 
difficult to read. Learning to assign variables that can be reused, and methods such as if/else help to minimize 
unnecessary code.*/
/*2. Using const means that your variable will not be reassigned to another value later. let is used when the value of
that variable might change. var is an earlier way to create variables and is not widely used in current coding.*/

//Section 2
const a = 4;
const b = 53;
const c = 57;
const d = 16; 
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log(a * a === d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);

let g = 0;
console.log(g);
g = (b + c);
console.log(g);
/*I used "let" because I knew I would be reassigning the value of g. "var" works but I did not use it since it was not 
recommended. Using "const" returns "TypeError: Assignment to constant variable."*/

//Bonus Challenge:
console.log((a > (b || f)) === (!f && (e > c)));

//Section 3

/*Infinite Loop I: The code is an infinite loop because (true || false) defaults to true. Without a false condition specified, the code
will keep running.
Infinite Loop II: This is not an infinite loop, but the code will fail because runProgram was created with 'const' and its 
value cannot be reassigned to false.*/

let letters = 'A';
let i = 0; 

//This creates a loop that will continue running as long as the value of i is less than 20.
while (i < 20) {
    //I am not sure, but guessing that this will add another 'A' to each string that prints.
    letters += 'A';
    //This increases the value of i by 1 each time the code runs.
    i++;
//This closes the while loop.
};
//Based on my above guess, I think this will print 'A' then 'AA' then 'AAA' until the string length has reached 19.
console.log(letters);

/*I was not correct. I realize now that because console.log is outside of the code block, it will not print each time 
the loop runs.*/

//Section 4

//For Loop I:
for (let i = 0; i < 100; i++) {
    console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
}
//The first part of the control panel is: i = 0. This sets the initial value of i to 0.
//The second part of the control panel is: i < 100. This is the stopping condition of the loop.
//The third part of the control panel is: i++. This increments i by 1 each time the loop runs.

//For Loop II:
for (let i = 0; i < 1000; i++) {
    console.log(i);
}

/*Bonus Challenge: The backslash (\) negates the character that follows it in a string. This allows for characters like
! and '' to be printed from strings without interfering with the code. The forward slash (/) is used for number division.

For Loop in Reverse:*/
for (let i = 999; i >=0; i--) {
    console.log(i);
}

//Bonus Challenge:
for (let i = 1; i <=10; i++) {
    console.log('The value of i is: ' + i + ' of 10');
}

//Iteration:
const StarWars = ['Han', 'C3PO', 'R2D2', 'Luke', 'Leia', 'Anakin'];

for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i]);
}

//Bonus Challenge:

for (let i = 0; i <StarWars.length; i +=2) {
    console.log(StarWars[i]);
}