console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];


// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");
  const mE = document.createElement('div');
  mE.setAttribute('id', 'middle-earth');
  // 1. create a section tag with an id of middle-earth
  document.body.append(mE);
  // 2. append the section to the body of the DOM.
  for (i = 0; i < lands.length; i++) {
  // 3. use a for loop to iterate over the lands array that does the following:
    const landArt = document.createElement('article');
  //   3a. creates an article tag (there should be one for each land when the loop is done)
    landArt.setAttribute('id', lands[i]);
  //   3b. gives each land article an `id` tag of the corresponding land name
    landArt.innerHTML=('<h1>' + lands[i] + '</h1>')
  //   3c. includes an h1 with the name of the land inside each land article
    mE.appendChild(landArt);
  //   3d. appends each land to the middle-earth section
  }
};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)
  let hobbitList = document.createElement('ul');
  // 1. create a 'ul'
  for (i = 0; i < hobbits.length; i++) {
    let indHobbit = document.createElement('li');
    indHobbit.innerHTML=(hobbits[i]);
    hobbitList.appendChild(indHobbit);
  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
    indHobbit.setAttribute('class', 'hobbit');
  }
  // 3. also, give each hobbit (`li`) a class of "hobbit"
  document.getElementById('The-Shire').append(hobbitList)
  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
  
};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  // const ringDiv = document.createElement('div')
  // ringDiv.setAttribute('id', 'the-ring')
  // ringDiv.classList.add('magic-imbued-jewelry')
  // 1. create an empty div with an id of 'the-ring'
  // let frodoBags = document.getElementsByClassName('hobbit')[0]
  // frodoBags.appendChild(ringDiv)
  const $ring = $('<div>')
  $ring.attr('id', 'the-ring')
  const $frodo = $('.hobbit')[0]
  console.log($ring)
  $ring.appendTo($frodo)
  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly

};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
  let baddyList = document.createElement('ul');
  // 1. display an unordered list of baddies in Mordor
  for (i = 0; i < baddies.length; i++) {
    let indBaddy = document.createElement('li');
    indBaddy.innerHTML=(baddies[i])
    indBaddy.setAttribute('class', 'baddy');
    baddyList.append(indBaddy);
  // 2. give each of the baddies a class of "baddy"
    document.getElementById('Mordor').append(baddyList)
  // 3. remember to append the ul to Mordor
  }
};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // const sideBuds = document.createElement('aside');
  // document.getElementById('Mordor').appendChild(sideBuds);
  // // 1. create an aside tag and append it to middle-earth below mordor
  // let buddyList = document.createElement('ul');
  // for (i = 0; i < buddies.length; i++){
  //   let indBud = document.createElement('li');
  //   indBud.innerHTML=(buddies[i]);
  // // 2. display an unordered list of buddies in the aside
  //   indBud.classList.add('buddy');
  //   buddyList.append(indBud);
  // // 3. give each of the buddies a class of "buddy"
  //   sideBuds.append(buddyList);
  // // 4. don't forget to append them to the aside
  // }

  const $aside = $('<aside>')
  $('#Mordor').append($aside)
  const $buddies = $('<ul>')
  for (l = 0; l < buddies.length; l++) {
    const $buddy = $('<li>').append(buddies[l])
    $buddy.addClass('buddy');
    $buddies.append($buddy)
  }
  $aside.append($buddies)
};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  const bandOfHobs = document.getElementById('The-Shire').childNodes[1];
  document.getElementById('Rivendell').append(bandOfHobs)
};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  // const whoDis = (document.getElementsByClassName('buddy')[3])
  // whoDis.innerText='Aragorn'

  const $whoDis = $('.buddy')[3]
  $whoDis.innerText='Aragorn'
  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  const fellowDiv = document.createElement('div');
  fellowDiv.setAttribute('id', 'the-fellowship');
  // 1. create a new div with an id 'the-fellowship'
  const fellowTitle = document.createElement('h1');
  fellowTitle.innerText='The Fellowship'
  fellowDiv.appendChild(fellowTitle)
  // 2. add an h1 with the text 'The Fellowship' to this new div
  document.getElementById('middle-earth').append(fellowDiv)
  // 3. append the fellowship to middle-earth
  const bandOfHobs = document.getElementsByTagName('ul')[0];
  const sideBuds = document.getElementsByTagName('ul')[2];
  fellowDiv.append(bandOfHobs);
  fellowDiv.append(sideBuds);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  const gandalf = (document.getElementsByClassName('buddy')[0]);
  gandalf.innerHTML='Gandalf the White';
  // 1. change the 'Gandalf' text to 'Gandalf the White'
  gandalf.classList.add('the-white')
  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border **done**

};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  alert('The horn of Gondor has been blown!')
  // 1. create a pop-up alert that the horn of gondor has been blown
  const boromir = document.getElementsByClassName('buddy')[4];
  boromir.innerHTML="<del>Boromir</del>"
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  document.getElementsByClassName('baddy')[2].remove()
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  const mordor = document.getElementById('Mordor');
  const frodo = (document.getElementsByClassName('hobbit')[0]);
  const sam = (document.getElementsByClassName('hobbit')[1]);
  mordor.append(frodo, sam);
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const morDiv = document.createElement('div')
  morDiv.setAttribute('id', 'mount-doom');
  morDiv.append(document.createElement('h1').innerHTML="Mount Doom")
  mordor.append(morDiv)
  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  const golDiv = document.createElement('div');
  golDiv.setAttribute('id', 'gollum');
  const gollum = document.createElement('h2').innerHTML='Gollum';
  golDiv.append(gollum)
  document.getElementById('Mordor').append(golDiv);
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const theRing = document.getElementById('the-ring');
  document.getElementById('gollum').appendChild(theRing);
  // 2. Move the ring from Frodo and give it to Gollum
  document.getElementById('mount-doom').appendChild(golDiv);
  // 3. Move Gollum into Mount Doom
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  document.getElementById('gollum').remove()
  // 1. remove Gollum and the Ring from the DOM
  document.getElementsByTagName('ul')[0].remove();
  // 2. remove all the baddies from the DOM
  const shire = document.getElementById('The-Shire');
  const frodo = (document.getElementsByClassName('hobbit')[0]);
  const sam = (document.getElementsByClassName('hobbit')[1]);
  shire.append(document.getElementsByTagName('ul')[0], frodo, sam);
  
  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK **done**
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
});
