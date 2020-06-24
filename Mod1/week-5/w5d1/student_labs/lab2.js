//Classes

class Pet {
    constructor(owner, name) {
        this.owner = owner,
        this.name = name
        }
    walk() {
        console.log('walka walka')
    }       
}
const hank = new Pet('Sarah', 'Henry');
console.log(hank)
hank.walk()

class Dog extends Pet {
    price = 20;
    bark() {
        console.log('bark')
    };
    chaseTail() {
        console.log('oh boy oh boy oh boy')
    };
    getPrice() {
        return this.price
    }
}
const doggums = new Dog('Giant Jimmy', 'Doggums')
console.log(doggums)
doggums.walk();
doggums.bark();
doggums.chaseTail();
console.log(doggums.getPrice())

class Cat extends Pet {
    price = 10;
    purr() {
        console.log('purrrr')
    }
    clean() {
        console.log('cleaning')
    }
    getPrice() {
        return this.price
    }
    walk() {
        console.log('strut strut')
    }
}
const goblinFace = new Cat('Sarah', 'Goblin Face')
console.log(goblinFace)
goblinFace.purr();
goblinFace.clean();
console.log(goblinFace.getPrice())

doggums.owner = 'Sarah'
console.log(doggums)
goblinFace.price = 600
console.log(goblinFace)

//Stretch
let deckOfCards = [];
class Cards {
    constructor(value, face, suit, faceUp) {
        this.value = value,
        this.face = face,
        this.suit = suit,
        this.faceUp = false
    }
}
let hearts = []
let spades = []
let clubs = []
let diamonds = []
let faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
let suits = ['hearts', 'spades', 'clubs', 'diamonds']
function eachSuit(){
    for (a = 0; a < 4; a++) {
        if (a = 0) {
            hearts.push(new Cards(undefined, undefined, 'hearts'))
        } else if (a = 1) {
            spades.push(new Cards(undefined, undefined, 'spades'))
        } else if (a = 2) {
            clubs.push(new Cards(undefined, undefined, 'clubs'))
        } else if (a = 3) {
            diamonds.push(new Cards(undefined, undefined, 'diamonds'))
        }
            }
        }
eachSuit()
console.log(hearts)

