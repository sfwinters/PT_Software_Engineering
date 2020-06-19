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
        console.log('Pick a song: ' + worldsLamestJukebox[songNum])
    }
}

function powerButton(num) {
    num = options(num);
}
powerButton(2)
