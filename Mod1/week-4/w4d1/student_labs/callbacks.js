// const logParam = param => {
//     console.log(param);
// }

// const sayHi = (hi) => {
//     return('hi');
// }
// let param = 1
// logParam(sayHi(param))

// const foo = (param, param2) => {
//     param(param2);
// }
// const bar = (param) => {
//     console.log(param);
// }
// //  foo(bar, 'hi');

// const baz = (param) => {
//     console.log(param.toUpperCase());
// }

// foo(baz, 'hello') //HELLO

// const electricMixer = attachment => {
//     console.log('This mixer is now: ' + attachment())
// };
// electricMixer(() => {
//     return 'spiralizing';
// });

// const spiralizer = () => {
//     return 'spiralizing';
// }

// // electricMixer(spiralizer);

// const slicerDicer = () => {
//     return 'slicin\' and dicin\'';
// }

// // electricMixer(spiralizer);
// // electricMixer(slicerDicer);

// const doughHook = () => {
//     return 'makin\' that dough'
// }

// // electricMixer(doughHook)

//setInterval and setTimeout

// let num = 0;
// const clock = setInterval(() => {
//     num +=1;
//     console.log(num);
//     if (num >=59) {
//         num = 0;
//     }
// }, 1000 )

//real world example: setting a login session to time out after a certain period

let reverseString = '';
function wordReverse(string) {
    for (i = string.length - 1; i >= 0; i--) {
        reverseString = string.split(' ').reverse().join(' ')
    }console.log(reverseString);
}
wordReverse('javascript is fun');

let allCaps = '';
const capsMania = blah => {
    for (i = 0; i <= blah.length; i++){
        allCaps = (blah.toUpperCase());
    }console.log(allCaps)
}
capsMania('guacamole');

function repMaster(things, func) {
    func(things) + console.log(' proves that I am the rep MASTER!')
}

repMaster('hallelujah holy shit where\'s the tylenol', wordReverse)
repMaster('booyakasha', capsMania)