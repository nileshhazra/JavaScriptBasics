//For Loop
for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// While Loop
console.log('While-Loop');
let i = 0;
while (i<5) {
    console.log(i);
    i++;
}

// Do While Loop
console.log('do-while');
let j = 11;
do {
    if(j % 2 !== 0) console.log(j);
    j++;
} while (j<11);

//Infinite loops Avoid
while (true) {
    console.log('hello');
    break; // commennt it to see
}