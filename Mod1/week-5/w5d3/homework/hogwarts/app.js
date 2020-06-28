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
    $($container).append('<ul id = \'trunk\'></ul>');
    let $trunk = document.getElementById('trunk');
    $trunk.setAttribute('storage', 'trunk');
    $($trunk).append('<li>butter beer</li>', '<li class = "secret">invisibility cloak</li>', '<li class = "secret">magic map</li>', '<li class = "secret">time turner</li>', '<li class = "cat">leash</li>', '<li>Bertie Bott\'s Every Flavor Beans</li>')
    // console.log($trunk)
    $($container).append('<h5>Summer 2020</h5>');
    $wand.remove()
    let $inventory = document.getElementsByTagName('li')
    $inventory[0].remove()
    $($trunk).prepend('<li>Rosewood Wand with Phoenix Feather Core</li>')
    $inventory[0].style.color = 'green'
    $($pet).detach()
    $($trunk).append($pet)
    $($house).append($pet)
    $('.secret').hide('slow')
    $('.secret').delay(2000).show('slow')
    let $leash = $('.cat')[1]
    // console.log($leash)
    $($leash).addClass('cabbage')
    $($leash).removeClass('cabbage')
});