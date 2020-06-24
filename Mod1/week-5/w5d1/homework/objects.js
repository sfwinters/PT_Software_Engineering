class Hamster {
    constructor(name) {
        this.owner = '',
        this.name = name,
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price;
    }
}

class Person {
    constructor(name) {
        this.name = name,
        this.age = 0,
        this.height = 0,
        this.weight = 0,
        this.mood = 0,
        this.hamsters = [],
        this.bankAccount = 0
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log('Hello, ' + name);
    }
    eat() {
        weight += 1;
        mood += 1;
    }
    exercise() {
        weight -=1;
    }
    ageUp() {
        age +=1;
        height +=1;
        weight +=1;
        mood -=1;
        this.bankAccount +=10;
    }
    buyHamster() {
        this.hamsters.push(new Hamster('Gravy'));
        mood +=1;
        this.bankAccount -= Hamster.getPrice()
    }
}