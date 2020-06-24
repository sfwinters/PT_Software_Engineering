let hotelCalifornia = {
    name: 'Hotel California',
    location: 'California',
    rating: 4,
    vacancies: true,
    tags: [
        'pink champagne',
        'wine',
        'lovely',
        'can\'t leave'
    ],
    rooms: [{
        'roomNumber': 102,
        'size': 'Queen Double',
        'price': 55,
        'booked': true
    },
    {
        'roomNumber': 202,
        'size': 'King Suite',
        'price': 68,
        'booked': false
    },
    {
        'roomNumber': 404,
        'size': 'Queen Double',
        'booked': false
    }
]
}
console.log(hotelCalifornia.vacancies) //true


class Person {
    constructor(nameParam, ageParam, eyesParam, hairParam) {
        this.legs = 2;
        this.arms = 2;
        this.name = nameParam;
        this.age = ageParam;
        this.eyes = eyesParam;
        this.hair = hairParam;
        this.hobbies = 'coding'
    }
    setHobby(hobbyParam) {
        this.hobbies = hobbyParam
    }
    setHair(hairParam) {
        this.hair = hairParam
    }
    walk() {
        console.log('I hate when my Segway is in the shop.')
    }
}
const me = new Person('Winters', 40, 'hazel', 'brown')

me.setHobby('mario kart');
me.setHair('blue')
console.log(me)

class Superhero extends Person {
    fly() {
        console.log('Up, up and away!')
    }
}
const superman = new Superhero('Clark Kent', undefined, 'blue', 'black');
superman.fly()          //Up, up and away!

class Doctor extends Person {
    diagnose() {
        console.log('That\'ll be $8k')
    }
}
const drHouse = new Doctor('House', 69, 'brown', 'brown')
drHouse.diagnose()      //That'll be $8k

//superman.diagnose() will not work since superman is not in the Doctor child class of Person. 
//'TypeError: superman.diagnose() is not a function'

class Surgeon extends Doctor {
    surgery() {
        console.log('I have performed surgery')
    }
}

const drMurphy = new Surgeon('Murphy', 50, 'green', 'brown')

drMurphy.diagnose()   //That'll be $8k      will work since Surgeon is a child class of Doctor
drMurphy.surgery()      //I have performed surgery

//TypeError: drHouse.surgery() is not a function
