//Datatypes Refresher

//1.  A light switch that can be either on or off.
    //=> datatype: boolean 
    //=> data structure example: 
    const lightSwitch = true;

//2. A user's email address.
    //=> datatype: string
    //=>data structure example: 
    const sarahEmail = 'sarah.f.winters@gmail.com';

//3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    //=>datatype: object
    //=>data structure example: 
    const spaceship = {
        hull: 'aluminum composite',
        'laser blasters': true,
        'tractor beam': 'focused linear graviton beam',
        'warp drive': true
    }

//4. A list of student names from our class.
    //=>datatype: array
    //=>data structure example: 
    const classNames = ['Antwan', 'Arron', 'Beth', 'Bob', 'Bruce', 'Bryan', 'Chris', 'DeAmber', 'Hector', 'Kimmy', 'Mekia', 'Motasem', 
    'Natan', 'Sam', 'Sarah', 'Shyle', 'Thomas', 'Ty', 'Yazan']
    //(hope I didn't miss anyone) :)

//5. A list of student names from our class, each with a location.
    //=>datatype: array of objects
    //=>data structure example: 
    const nameAndLoc = [
        { name: 'Antwan', location: 'Columbus' },
        { name: 'Beth', location: 'Columbus'},
        { name: 'Sarah', location: 'Columbus'}
    ]
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
    //=>datatype: array of objects, objects have nested array
    //data structure example:
    const studentData = [
        { name: 'Antwan', location: 'Columbus', 'favorite tv shows': ['TV Show 1', 'TV Show 2', 'TV Show 3'] },
        { name: 'Shyle', location: 'Columbus', 'favorite tv shows': ['TV Show 4', 'TV Show 5', 'TV Show 6'] },
        { name: 'Ty', location: 'Columbus', 'favorite tv shows': ['TV Show 7', 'TV Show 8', 'TV Show 9']}
    ];


    //Take It Easy

    //1. Make an array that holds all of the colors of the rainbow.
    const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    //2. Write code that will access 'blue' from the rainbow array.
    console.log(rainbow[4]);

    //3. Make an object that is your name and holds the information about your favorite food, a hobby, the name of the town
    //that you live in currently, and your favorite datatype.
    const sarahWinters = {
        name: 'Sarah Winters',
        'favorite food': 'steak',
        hobby: 'watching bad movies',
        currentLocation: 'Columbus, Ohio',
        favoriteDatatype: 'string'
    }

    //4. Write code that will access your hobby from the object you just created.
    console.log(sarahWinters.hobby);


//Crazy Object!

const crazyObject = {
    taco: [
        { meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']},
        { meat: 'chicken',
            salsa: ['pico', 'hot', 'hotter', 'really hot', 'really really hot', 'omg my mouth is burning']
        }],
    larry: {
        nicknames: ['LD', 'Chicken Teriyaki Boyyyyy'],
        quotes: ['Pretty pretty prettayyyyy good', 'Is that a Parkinson\'s thing?', 'Women love a self-confident bald man',
        'I\'m a walking, talking enigma'],
        characters: [
            { name: 'Jeff',
            occupation: 'manager'
            },
            { name: 'Funkhauser',
            occupation: 'TV dude'
            },
            { name: 'Susie',
            occupation: 'Jeff\'s wife',
            favoriteHobby: 'Swearing at Larry and Jeff'
            }]
    }
}
//Use crazyObject to log the following.
//1. 'omg my mouth is burning'
console.log(crazyObject.taco[1].salsa[5]);

//2. 'Pretty pretty prettayyyyy good'
console.log(crazyObject.larry.quotes[0]);

//3. 'Swearing at Larry and Jeff'
console.log(crazyObject.larry.characters[2].favoriteHobby);

//4. 'Chicken Teriyaki Boyyyyy'
console.log(crazyObject.larry.nicknames[1])

//5. The object that contains the name funkhauser
console.log(crazyObject.larry.characters[1])

//6. Add the quote 'I'm trying to elevate small talk to medium talk' to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk');
console.log(crazyObject.larry.quotes);


//Object-ception
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: 'Joseph Gordon Levitt'
                            }
                        }
                    }
                }
            }
        }
    }
}

let jgl = (((((((inception || {}).reality || {}).dreamLayer1 || {}).dreamLayer2 || {}).dreamLayer3 || {}).dreamLayer4 || 
{}).dreamLayer5 || {}).dreamLayer6;

jgl['limbo'] = null;
console.log(jgl);


