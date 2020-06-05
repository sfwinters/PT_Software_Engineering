/*Part 1: HTML and CSS
5 - I got this! I am ready to code
*/

//Part 2: JavaScript Reps

//Easy Going
/*for (i = 1; i <= 20; i++) {
    console.log(i);
}

//Get Even
for (i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

//Fizz Buzz
for (i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
};*/

//Wild Wild Life
/*const wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory'];
const sharky = ['Sharky', 'shark', 20, 'Left Coast'];
const plantee = ['Plantee', 'plant', 5000, 'Mordor'];
const porgee = ['Porgee', 'Porg', 186, 'Ahch-To'];
const dart = ['D\'Art', 'Demogorgon Dog', 2, 'Upside Down'];

plantee[2] = plantee[2] + 1;
wolfy[3] = 'Gotham City';
dart.push('Hawkins');
wolfy.splice(0, 1, 'Gameboy');*/

//Yell at the Ninja Turtles
const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const turtlePower of turtles) {
    console.log(turtlePower.toUpperCase());
}
