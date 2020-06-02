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

let week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let fave_day='Friday';
if (fave_day===week[0] || fave_day===week[6]) {
    console.log('I like the weekend');
} else if (fave_day===week[1] || fave_day===week[2] || fave_day===week[3] || fave_day===week[4] || fave_day===week[5]) {
    console.log('Give me a good \'ol weekday');
} else {
    console.log('WTF u doin');
}