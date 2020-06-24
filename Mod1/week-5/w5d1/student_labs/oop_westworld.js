//OOP Westworld Lab

const host = {
    name: 'Jack Splat',
    occupation: 'competitive egg thrower',
    saySpecs() {
        console.log(`My name is ${this.name}. My occupation is ${this.occupation}.`)
    }
}
host.saySpecs()  //My name is Jack Splat. My occupation is competitive egg thrower.

class BasicHost {
    constructor(name, occupation, favColor, height) {
        this.name = name,
        this.occupation = occupation,
        this.favColor = favColor,
        this.height = height
        }
        saySpecs() {
            console.log(`My name is ${this.name}. My occupation is ${this.occupation}. I love ${this.favColor} and my height is ${this.height}.`)
        }
}
const host1 = new BasicHost('Roget', 'creator of Roget\'s Thesaurus')
console.log(host1);
const host2 = new BasicHost('Handsome Pete', 'playing accordion for nickels at the pier', 'green', '4\'2"')
host2.saySpecs();
const host3 = new BasicHost('Fred', 'imaginary friend', 'red', '6\'2"')
host3.saySpecs();

const names = [
    'Laila', 'Jack', 'Harley', 'Hertha', 'Darren', 'Jolene', 'Loura', 'Lona', 'Davida', 'Reena', 'Leland', 'Ta', 'Jen',
    'Linn', 'Roslyn', 'Margorie', 'Rafaela', 'Romona', 'Shanel', 'Stan'
]
occupations = [
    'clerical assistant', 'leaflet distributor', 'landowner', 'special constable', 'anaesthetist', 'park-keeper', 'butler',
    'choreographer', 'blacksmith', 'chef', 'legal secretary', 'song writer', 'librarian', 'landscape gardener'
]
let hostArray = [];
for (i = 0; i < 100; i++) {
    let n = Math.floor(Math.random() * names.length);
    let o = Math.floor(Math.random() * occupations.length);
    hostArray.push(new BasicHost(names[n], occupations[o]));
}
console.log(hostArray)
hostArray[55].saySpecs()