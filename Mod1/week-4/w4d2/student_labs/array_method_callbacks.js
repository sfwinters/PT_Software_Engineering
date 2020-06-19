//Messing with the Minions
const minions = ['bob', 'kevin', 'stuart', 'dave', 'jerry', 'mark', 'tim', 'phil', 'carl'];
//forEach
minions.forEach(elem => console.log(elem + ' - here'));

//map
let capitalizedMinions = [];
for (name of minions) {
    if (name !== 'kevin') {
        capitalizedMinions.push(name[0].toUpperCase() + name.slice(1))
    } else {
        capitalizedMinions.push(name)
    }
}
console.log(capitalizedMinions)

//every
function isCapitalized(string) {
    if (string[0] === string[0].toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(capitalizedMinions.every(isCapitalized)) //false

//filter
let actuallyCapitalizedMinions = capitalizedMinions.filter(isCapitalized)
console.log(actuallyCapitalizedMinions.every(isCapitalized)) //true

//find
let uncapitalizedMinion = []
for (name of capitalizedMinions) {
    if (isCapitalized(name) === false) {
        uncapitalizedMinion.push(name)
    }
}
console.log(uncapitalizedMinion)

//findIndex
let notCaps = name => {
    if (isCapitalized(name) === false) {
        return true;
    }
}

console.log(capitalizedMinions.findIndex(notCaps)) //1

capitalizedMinions[1] = 'Kevin'
console.log(capitalizedMinions.every(isCapitalized)) //true

//reduce
let minionNameLengths = minions.map(name => name.length)
let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(minionNameLengths.reduce(reducer)) //38

//some
const longName = (letters => letters >= 6)
console.log(minionNameLengths.some(longName)) //true
const evenLongerName = (letters => letters >= 7)
console.log(minionNameLengths.some(evenLongerName)) //false

capitalizedMinions[1] = 'kevin'
console.log(capitalizedMinions.some(isCapitalized)) //true
let allLower = (name => name !== isCapitalized)
console.log(capitalizedMinions.some(allLower)) //true

//sort
function sortMinions(a, b) {
    return a.length - b.length
}
console.log(capitalizedMinions.sort(sortMinions))