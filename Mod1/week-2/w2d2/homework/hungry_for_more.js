//Return of the Closets
const kristynsCloset = ['left shoe', 'cowboy boots', 'right sock', 'GA hoodie', 'green pants', 'yellow knit hat', 'marshmallow peeps'];

const thomsCloset = [
    [//These are Thom's shirts
    'grey button-up',
    'dark grey button-up',
    'light blue button-up',
    'blue button-up'],
    [//These are Thom's pants
    'grey jeans',
    'jeans',
    'PJs'],
    [//Thom's accessories
    'wool mittens',
    'wool scarf',
    'raybans']
];

//Hungry For More?

//Alien Attire
const kristynsShoe = kristynsCloset[0];
thomsCloset[2].push(kristynsShoe)
console.log(thomsCloset)

//Dress Us Up

// const kristynsItems = [];
for (let k = 0; k <= 2; k++) {
    kristynsItems.push(Math.floor(Math.random() * kristynsCloset.length))
};
let kristynsOutfit = [];
kristynsItems.forEach(num => {
    kristynsOutfit.push(kristynsCloset[num])
})
console.log('Hey Kristyn! You\'re going to get arrested if you leave the house wearing only ' + kristynsOutfit[0] + ', ' + kristynsOutfit[1] + ', and ' + kristynsOutfit[2] + '. Buy some more freaking clothes!')

const thomsShirts = thomsCloset[0]
const thomsPants = thomsCloset[1]
const thomsStuff = thomsCloset[2]
const thomsItems = [];
let thomsShirt = Math.floor(Math.random() * thomsShirts.length);
let thomsPant = Math.floor(Math.random() * thomsPants.length);
let thomsAcc = Math.floor(Math.random() * thomsStuff.length);

console.log('Thom is looking sharp in a ' + thomsShirts[thomsShirt] + ', ' + thomsPants[thomsPant] + ', and ' + thomsStuff[thomsAcc] + '.')

//Dirty Laundry

for (g = 0; g < kristynsCloset.length; g++){
    console.log('WHIRR: Now washing ' + kristynsCloset[g]);
}

console.log('Shirts: ' + thomsCloset[0]);
console.log('Pants: ' + thomsCloset[1]);
console.log('Accessories: ' + thomsCloset[2]);