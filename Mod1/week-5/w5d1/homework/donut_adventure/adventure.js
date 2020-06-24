class Hero {
    constructor(name) {
        this.name = name,
        this.health = 100,
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        },
        this.catchPhrases = [
            'I\'m fresher than day-old pizza.',
            'You can\'t count my calories!'
        ]
    }
    talkSass() {
        let sass = (Math.floor(Math.random()));
        console.log(this.catchPhrases[sass])
    };
    announceHealth() {
        console.log(this.health);
    };
    fight() {
        console.log('I\'m ready to rumble!')
    }
}
const dougie = new Hero('Dougie the Doughnut');
console.log(dougie)

class Enemy {
    constructor(name) {
        this.name = name,
        this.health = 100,
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        },
        this.catchPhrases = [
            'I\'m YouTube famous!', 'I\'m more dangerous than an uncovered sewer.'
        ]
    }
    talkSmack() {
        smack = Math.floor(Math.random());
        console.log(this.catchPhrases[smack]);
    }
    announceHealth() {
        console.log(this.health)
    }
    fight() {
        console.log('I\'m gonna flatten you like a slice of pepperoni!')
    }
}
const pizzaRat = new Enemy('Pizza Rat')
console.log(pizzaRat)