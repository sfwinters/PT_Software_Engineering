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
        console.log(this.catchPhrases[Math.floor(Math.random() * 2)])
    };
    announceHealth() {
        console.log(`${this.name}'s current health level is ${this.health}.`)
    };
    fight(rival) {
        const dougieItems = Object.keys(dougie.weapons);
        let hp = Object.values(dougie.weapons)
        const hit = Math.floor(Math.random() * 2)
        const bam = dougieItems[hit]
        const pow = hp[hit]
        rival.health -= pow
        console.log('I\'m ready to rumble!');
        console.log(`Dougie used ${bam}!`)
        console.log(`${rival.name} was hit by ${bam}! His health is now at ${rival.health}!`)
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
        console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
    }
    announceHealth() {
        console.log(`${this.name}'s current health level is ${this.health}.`)
    }
    fight(rival) {
        const ratItems = Object.keys(pizzaRat.weapons);
        let hp = Object.values(pizzaRat.weapons)
        const hit = Math.floor(Math.random() * 2)
        const bam = ratItems[hit]
        const pow = hp[hit]
        rival.health -= pow
        console.log('I\'m gonna flatten you like a slice of pepperoni!')
        console.log(`Pizza Rat used ${bam}!`)
        console.log(`${rival.name} was hit by ${bam}! His health is now at ${rival.health}!`)
        
    }
}
const pizzaRat = new Enemy('Pizza Rat')
console.log(pizzaRat)

dougie.talkSass()
pizzaRat.talkSmack()
dougie.announceHealth()
pizzaRat.announceHealth()

pizzaRat.fight(dougie)
dougie.fight(pizzaRat)

dougie.announceHealth()
pizzaRat.announceHealth()
