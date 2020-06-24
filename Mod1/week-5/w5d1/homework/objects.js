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
        console.log('Hello, ' + this.name);
    }
    eat() {
        this.weight += 1;
        this.mood += 1;
    }
    exercise() {
        this.weight -=1;
    }
    ageUp() {
        this.age +=1;
        this.height +=1;
        this.weight +=1;
        this.mood -=1;
        this.bankAccount +=10;
    }
    buyHamster() {
        this.hamsters.push(gus);
        this.mood +=1;
        this.bankAccount -= gus.getPrice()
    }
}
const timmy = new Person('Timmy');
timmy.age = 5;
for (i = 0; i < 5; i++) {
    timmy.eat(i)
}
for (i = 0; i < 5; i++) {
    timmy.exercise(i)
}
for (i = 0; i < 9; i++) {
    timmy.ageUp(i)
}

const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster()
for (i = 0; i < 15; i ++) {
    timmy.ageUp()
}
for (i = 0; i < 2; i ++) {
    timmy.eat();
    timmy.exercise();
}
console.log(timmy)
console.log(gus)