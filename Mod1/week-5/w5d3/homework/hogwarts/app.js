// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
    let $container = document.getElementById('container')
    // console.log($container)
    let $h1 = $('<h1></h1>').text('Hogwarts');
    let $name = $('<h2></h2>').text('Sarah Winters');
    let $house = $('<h3></h3>').text('Ravenclaw');
    let $pet = $('<h4></h4>').text('Goblin Face');
    $pet.addClass('cat');
    let $wand = $('<h4></h4>').text('Hornbeam Wand with Dragon Heartstring Core');
    $($container).append($h1, $name, $house, $pet, $wand)
    // console.log($pet)
    document.getElementsByClassName('cat')
});