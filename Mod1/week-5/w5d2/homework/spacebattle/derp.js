/*
need hero ship and alien ships with:
    hull
        if hull reaches 0 the ship is destroyed
    firepower
        amount of damage done with a successful hit
    accuracy
        determined randomly for each attack with Math.random

if hero ship is destroyed
    game over
if alien ship is destroyed
    attack next or retreat?
        if attack next, start battle with next alien ship (if any)
            if all alien ships are destroyed, game over (win)
        if retreat, game over

*/
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


    // const ask = prompt(`${alienFleet[i].name} has been destroyed! Do you want to retreat or continue?`);
                    // if (ask != null) {
                    //     arnie.fight(alienFleet[i + 1])
                    // } else {
                    //     console.log(`You have retreated to fight another day.`)
                }