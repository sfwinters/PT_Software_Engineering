let i = 0;
while (i < 15) {
    console.log('hi');
    i++;
};

while (i < 30) {
    console.log('YEP!');
    i++;
}

let some_num;
for (some_num = Math.floor(Math.random() * 30); some_num < 30; some_num++) {
    if (some_num < 10) {
        console.log('that\'s a small number');
    } else if (some_num > 20) {
        console.log('that\'s a big number');
    } else if (some_num > 10 && some_num < 20) {
        console.log('that\'s a medium number');
    };
};

let fave_day;
function reaction(fave_day) {
    if (fave_day === 'Saturday'){
        console.log('I like the weekend')
    }
}