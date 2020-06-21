//Combining Datatypes

//1
const crayonBox = {
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
}
console.log(crayonBox.colors[3]) //green

//2
const bottle = {
    cap: {
        material: 'plastic',
        color: 'white'
    }
}
console.log(bottle.cap.material) //plastic

//3
const receipt = [
    {name: 'milk', price: 3.49},
    {name: 'eggs', price: 2.50},
    {name: 'Raisin Bran', price: 1.89}
]
console.log(receipt[2].price) //1.89

//4
const apartmentBuilding = [
    tenants = ['Joe Shmo', 'Dingus McCringus', 'Other Name'],
    floorplans = ['1 bedroom', '2 bedroom', '3 bedroom']
]
console.log(apartmentBuilding[0][1]) //Dingus McCringus

//More Than One Level Deep

//1
function knit(item, size, color, yarn) {
    this.item = item;
    this.size = size;
    this.color = color;
    this.yarn = yarn;
}
const birthdayGift = new knit('sweater', 'large', 'green', 'itchy');
console.log(birthdayGift.yarn);

//2
function crayonSelector(color, needSharpened, label) {
    this.color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    this.needSharpened = needSharpened;
    this.label = label
}
const whichCrayon = new crayonSelector('red', true, 'ripped');
console.log(whichCrayon.color[4]) //blue

//3
const worldsLamestJukebox = ['Rico Suave', 'Whoomp (There It Is)', 'Electric Avenue', 'The Curly Shuffle'];
function options(songNum) {
    if (songNum in worldsLamestJukebox) {
        console.log('You have picked song: ' + worldsLamestJukebox[songNum])
    }
}
const powerButton = num => num = options(num);
powerButton(2) //You have picked song: Electric Avenue

//Model a Vending Machine
const vendingMachine = [
    {name: 'Snickers', price: 1.00},
    {name: 'Doritos', price: 1.50},
    {name: 'pack of gum from 1988', price: 0.10},
]
vendingMachine.vend = () => {
    for (i = 0; i < vendingMachine.length; i++) {
        snackName = vendingMachine[i].name
    };
    console.log('Yum! A ' + snackName + '.')
}
vendingMachine.vend(2) //Yum! A pack of gum from 1988.

//Callbacks
//1
const add = (a, b) => {
    return (a + b)
}
add(1, 4) //5

//2
const subtract = (a, b) => {
    return (a - b)
}
subtract(7, 3) //4

//3
const multiply = (a, b) => {
    return (a * b)
}
multiply(14, 27) //378

//4
const divide = (a, b) => {
    return (a / b)
}
divide(100, 10) //10

let mathArray = [];
mathArray.push(add, subtract, multiply, divide)
console.log(mathArray)

function operate(num1, num2) {
    for (method of mathArray) {
        return method(num1, num2)
    }
}
const calculate = (num1, num2, x) => {
    x = mathArray[x](num1, num2) ;
    console.log(x)
}

calculate(2, 4, 0) //add = 6
calculate(5, 6, 1) //subtract, -1
calculate(8, 1, 2) //multiply, 8
calculate(76, 12, 3) //divide, 6.333repeating

// Function definition placement: moved function executions after function declarations
const bar = () => {
    console.log('bar here');
}
bar();
const foo = () => {
    console.log('foo here');
}
foo();
///////////
const foo2 = ()=>{
    console.log('hi');
}
foo2();

// SyntaxError: Missing initializer in const declaration - had to add = between foo and ()
//after fixing that, got ReferenceError: Cannot access 'foo' before initialization; moved execution after declaration to fix
//replaced 'foo' in second code block with 'foo2' to avoid conflict with previous answer's code

