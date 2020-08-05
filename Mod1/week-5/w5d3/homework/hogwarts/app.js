// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
    let $container = $('#container')
    console.log($container)
    let $h1 = $('<h1>')
    $h1.text('Hogwarts');
    let $name = $('<h2>').text('Sarah Winters');
    let $house = $('<h3>').text('Ravenclaw');
    let $pet = $('<h4>').text('Goblin Face');
    $pet.addClass('cat');
    let $wand = $('<h4>').text('Hornbeam Wand with Dragon Heartstring Core');
    $container.append($h1, $name, $house, $pet, $wand)
    console.log($pet)
    $container.append('<ul id = \'trunk\'></ul>');
    let $trunk = $('#trunk');
    $trunk.attr('storage', 'trunk');
    let $butterbeer = $('<li>').text('Butter Beer')
    let $cloak = $('<li>').text('invisibility cloak').addClass('secret')
    let $map = $('<li>').text('magic map').addClass('secret')
    let $timeturner = $('<li>').text('time turner').addClass('secret')
    let $leash = $('<li>').text('leash').addClass('cat')
    let $beans = $('<li>').text('Bertie Bott\'s Every Flavor Beans')
    $trunk.append($butterbeer, $cloak, $map, $timeturner, $leash, $beans)
    console.log($trunk)
    $container.append('<h5>Summer 2020</h5>');
    $wand.remove()
    let $inventory = $('li')
    console.log($inventory)
    $inventory[0].remove()
    let $newwand = $('<li>').text('Rosewood Wand with Phoenix Feather Core')
    $trunk.prepend($newwand)
    $newwand.css('color', 'green')
    $pet.detach()
    $trunk.append($pet)
    $house.append($pet)
    $('.secret').hide('slow')
    $('.secret').delay(2000).show('slow')
    console.log($leash)
    $leash.addClass('cabbage')
    $leash.removeClass('cabbage')
    let $h5 = $('h5')
    console.log($h5)
    $h5[0].innerHTML = 'Fall 2020'
    $trunk.prepend($butterbeer)
    $trunk.attr('storage', 'chest')
    console.log($trunk)
});