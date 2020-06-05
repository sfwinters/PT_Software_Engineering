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
/*const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (const turtlePower of turtles) {
    console.log(turtlePower.toUpperCase());
}*/
/*
//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
//console.log(favMovies.indexOf('Titanic')); //8

//1
favMovies.sort(); //puts array in alphabetical order

//2
favMovies.pop(); //removes last item in array (Volver)

//3
favMovies.push('Guardians of the Galaxy'); //adds 'Guardians of the Galaxy' to end of array

//4
favMovies.reverse();

//5
[favMovies[0], favMovies[14]] = [favMovies[14], favMovies[0]]; //swaps 'Fast and Furious' position with 'Guardians of the Galaxy'; F&F is now at beginning
favMovies.shift(); //removes first element (Fast and Furious)

//6
favMovies.unshift('The Big Lebowski'); //adds 'The Big Lebowski' to beginning of array

//7
//console.log(favMovies.indexOf('Django Unchained')); //15
favMovies.splice(15, 1, 'Avatar'); //replaces 'Django Unchained' with 'Avatar.' Permanently alters array.

//8
//console.log(favMovies.length / 2) //9.5
//console.log(favMovies.slice(10, 20)); //prints items from index 10 - 19. Does not permanently alter array.

//9
const secondHalf = favMovies.slice(10, 20); //creates a new array using favMovies.slice()
//console.log(secondHalf); //same output as in #8

//10
console.log(favMovies)
//console.log(favMovies.indexOf('Fast and Furious')); //returns -1
//using let instead of const is not necessary because arrays are considered mutable. If this were a standalone variable we would need to declare it with let in order to change it later.
*/

//Where is Waldo
const whereIsWaldo = [['Timmy', 'Frank'], 'Eggbert',
    ['Lucinda', 'Jacc', 'Neff', 'Snoop'],
    ['Petunia', ['Baked Goods', 'Waldo']]];

//console.log(whereIsWaldo.indexOf('Eggbert')) // 1
//console.log(whereIsWaldo[1]); //confirmed for Eggbert
const eggStandsAlone = whereIsWaldo.splice((0, 1), 1);
whereIsWaldo[1][2] = 'No One'
console.log(whereIsWaldo[2][1][1]);