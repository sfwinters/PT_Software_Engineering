//Me, Me, Me
// const me = {
//     firstName: 'Sarah',
//     lastName: 'Winters',
//     age: 40,
//     email: 'sarah.f.winters@gmail.com'
// }

// console.log(me.firstName);
// me.age = 1000
// console.log(me.age)
// me['place of residence'] = 'Columbus'
// console.log(me['place of residence']);

//Fancy Greeting

// const fancyGreeting = () => {
//     console.log(`Good evening, ${me.firstName}.`)
// }
// fancyGreeting(me)

//Slimer

// const monster = {
//     name: 'Slimer',
//     color: 'greenish',
//     type: 'plasm or ghost or something'
// }
// console.log(monster.name);
// monster.type = 'creature';
// monster.age = 6;
// console.log(monster);

//Ogres

const adventurer = {
    name: 'Rich',
    hitpoints: 2600,
    inventory: ['Tums', 'PacMan t-shirt', 'Five Hour Energy drink']
}

const ogre = {
    name: 'Mike',
    hitpoints: 4700,
    inventory: 'insults'
}

richHits = h => {
    for (h = Math.floor(Math.random() * 4700)) {
        if (richHits > 0) {
           console.log(`Mike has taken ${h} points of damage!`);
            return ogre.hitpoints - h;
        } else if (richHits <= 0) {
            console.log(`Oh NOOOOOOOOOO! Rich missed!`)
    }
    }
}
richHits(h);

    // mikeHits = h => {
    //     let h = Math.floor(Math.random() * 4700);

    // }