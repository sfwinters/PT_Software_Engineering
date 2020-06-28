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
            alienFleet.push(this.name);
        }
    }
}
const arnie = new Spaceship('USS Schwarzenegger', 'Earth')
const alien1 = new Spaceship('001', 'Aliens');
const alien2 = new Spaceship('002', 'Aliens');
const alien3 = new Spaceship('003', 'Aliens');
const alien4 = new Spaceship('004', 'Aliens');
const alien5 = new Spaceship('005', 'Aliens');
const alien6 = new Spaceship('006', 'Aliens');

