let alienFleet = []

class Spaceship {
    constructor(name, affiliation) {
        this.name = name,
        this.affiliation = affiliation.charAt(0).toUpperCase() + affiliation.slice(1);
        if (affiliation === 'Earth') {
            this.hull = 20,
            this.firepower = 5,
            this.accuracy = 0.70;
        } else {
            this.hull = Math.floor((Math.random() * 3) + 3);
            this.firepower = Math.floor((Math.random() * 2) + 2);
            this.accuracy = ((Math.random() * 0.2) + 0.6).toFixed(2);
            alienFleet.push(this);
        }
    }
    hullStatus() {
        console.log(`${this.name}'s hull is currently at ${this.hull}.`)
    };
    fireOn(rival) {
        this.accuracy = Math.random();
        rival.accuracy = Math.random();
        }
    }
const arnie = new Spaceship('USS Schwarzenegger', 'Earth')
const alien1 = new Spaceship('001', 'Aliens');
const alien2 = new Spaceship('002', 'Aliens');
const alien3 = new Spaceship('003', 'Aliens');
const alien4 = new Spaceship('004', 'Aliens');
const alien5 = new Spaceship('005', 'Aliens');
const alien6 = new Spaceship('006', 'Aliens');

console.log(alienFleet)

spaceBattle = () => {
    for (i = 0; i < 6; i++) {
        enemy = alienFleet[i]; 
        while (arnie.hull > 0 && enemy.hull > 0) {
            arnie.fireOn(enemy);
            if (arnie.accuracy >= enemy.accuracy) {
                enemy.hull -= arnie.firepower;
                console.log(`Direct hit! ${enemy.name} took damage.`)
                enemy.hullStatus();
                if (alienFleet[5].hull <= 0) {
                    console.log(`Well done, soldier! You have defeated the alien menace. YOU WIN`);
                    return;
                } else if (enemy.hull <= 0) {
                    // let choice;
                    // let yes = confirm(`${alienFleet[i].name} has been destroyed! Do you want to retreat or continue?`);
                    // if (yes == true) {
                    //     choice = "Let's do this!";
                    //     arnie.fight(alienFleet[i + 1])
                    // } else {
                    //      choice = `You have retreated to fight another day.`;
                    // }
                } else {
                    console.log(`The shot missed!`);
                }; 
            };
            enemy.fireOn(arnie);
                if (enemy.accuracy >= arnie.accuracy && enemy.firepower > 0) {
                arnie.hull -= enemy.firepower;
                console.log(`Direct hit! ${arnie.name} took damage.`)
                arnie.hullStatus();
                if (arnie.hull <= 0) {
                    console.log(`Your ship was destroyed! YOU LOSE`);
                    return;
                }
            }
        }
    }
}
            
spaceBattle();