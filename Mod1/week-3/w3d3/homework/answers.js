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

    

