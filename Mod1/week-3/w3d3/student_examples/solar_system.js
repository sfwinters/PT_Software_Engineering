// //The Milky Way Galaxy
// //1 & 2
// const milkyWay = {
//     type: 'barred spiral',
//     age: 13600000000,
//     containsEarth: false
// }
// //3
// console.log(milkyWay.containsEarth) //false
// //4
// milkyWay.containsEarth = true;
// //5
// console.log(milkyWay.containsEarth) //true
// //6
// milkyWay['numberOfStars'] = '100 - 400 billion'
// console.log(milkyWay)

//The Solar System, Part 1
const solarSystem = [
    {name: 'Mercury', ringSystem: false, moons: []},
    {name: 'Venus', ringSystem: false, moons: []},
    {name: 'Earth', ringSystem: false, moons: ['The Moon']},
    {name: 'Mars', ringSystem: false, moons: ['Phobos', 'Deimos']},
    {name: 'Jupiter', ringSystem: true, moons: ['Europa', 'Ganymede', 'Io', 'Callisto']},
    {name: 'Saturn', ringSystem: true, moons: ['Titan', 'Enceladus', 'Rhea', 'Mimas']},
    {name: 'Uranus', ringSystem: true, moons: ['Miranda', 'Titania', 'Ariel', 'Umbriel']},
    {name: 'Neptune', ringSystem: true, moons: ['Triton', 'Nereid']}
];
// //1
// console.log(solarSystem[4].moons)
// //2
// console.log(solarSystem[7].name)
// //3
// solarSystem[1].moons.push('Endor')
// console.log(solarSystem[1])
// //4
// solarSystem.push({name: 'Pluto', ringSystem: false, moons: ['Charon', 'Styx', 'Nix', 'Kerberos', 'Hydra']})
// console.log(solarSystem);
// //5
// solarSystem[2].diameter = '7917.5 miles'
// console.log(solarSystem[2])
//6
solarSystem[0].ringSystem = true
console.log(solarSystem)
//7