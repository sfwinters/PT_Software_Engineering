let tempString = {};

const findWordFrequency = string => {
    let splitString = string.toLowerCase().split(' ');
    for (i = 0; i < splitString.length; i++){
        let word = splitString[i];
        if (tempString[word] === undefined) {
            tempString[word] = 1;
        } else {
            tempString[word] += 1;
        } 
    } 
    console.log(tempString)
    let mostFreq = Object.keys(tempString).reduce((a, b) => tempString[a] > tempString[b] ? a : b);  
    console.log(mostFreq + ' is the most frequently-occurring word.')
};     

findWordFrequency('if i had known it was going to be this kind of party i would have stuck my dick in the mashed potatoes')