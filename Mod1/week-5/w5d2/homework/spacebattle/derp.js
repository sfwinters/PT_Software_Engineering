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

console.log(Math.random())