// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
    let $container = document.getElementById('container')
    // console.log($container)
    let $h1 = $('<h1></h1>').text('Hogwarts');
    $h1.appendTo($container);
    console.log($h1)
});