const adventurer = {
    name: 'Rich',
    hitpoints: 200000,
    inventory: ['Tums', 'PacMan t-shirt', 'Five Hour Energy drink'],
    companion: {
        name: 'Jack',
        type: 'clown'
    }
}

const ogre = {
    name: 'Mike',
    hitpoints: 200000,
    inventory: 'insults'
}

richDamage = () => {
    let d = Math.floor(Math.random() * 2000);
    return ogre.hitpoints -= d;
}

mikeDamage = () => {
    let d = Math.floor(Math.random() * 2000);
    return adventurer.hitpoints -= d;
}

superBattle = () => {
    while (ogre.hitpoints > 0 && adventurer.hitpoints > 0) {
        if (richDamage() > 0) {
            console.log(`Rich scored a direct hit! Mike has ${ogre.hitpoints} hit points left.`)
        } else if (richDamage() === 0) {
            console.log(`Rich missed! LOL`)
        };
        if (mikeDamage() > 0) {
            console.log(`Mike scored a direct hit! Rich has ${adventurer.hitpoints} hit points left.`)
        } else if (mikeDamage() === 0) {
            console.log(`Mike missed! LOL`)
        }
        if (adventurer.hitpoints <= 0) {
            console.log(`Oh NOOOOOO! Rich has succumbed to diabetes.`);
            return;
        };
        if (ogre.hitpoints <= 0) {
            console.log(`Mike was hit in the liver by a super bottle and has died.`);
            return;
        }
        }
    }

superBattle();