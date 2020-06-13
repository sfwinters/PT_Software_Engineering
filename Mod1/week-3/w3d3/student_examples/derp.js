const adventurer = {
    name: 'Timothy',
    hitpoints: 10,
    belongings: ['sword', 'potion', 'Tums'],
    companion: {
        name: 'Velma',
        type: 'bat'
    }
}

console.log(adventurer.companion.name) //Velma

adventurer.companion.name = 'Susan'

console.log(adventurer.companion.name) //Susan

adventurer.companion2 = {
    name: 'Dingus',
    type: 'insect'
}
// console.log(adventurer.companion2)

adventurer.companion.companion = {
    name: 'Buttmunch',
    type: 'butt parasite'
}
