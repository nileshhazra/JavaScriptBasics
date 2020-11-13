// Arithmetic
let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
console.log(x++); // x is 11 now
console.log(++x); // x is 12 now
console.log(y--); // y is 2 now
console.log(--y); // y is 1 now


//Assignment
x = 10;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;





//Comparison
 x = 1;
//relational
console.log(x > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);
//Equality
console.log(x === 1);// true
console.log(x !== 1);// false
// Strict Equality (Type +  Value)
console.log(1 === 1); //true
console.log('1' === 1); // false
//Lose Equality
console.log(1 == 1); // true
console.log('1' == 1); // true

//ternary operator
let points = 110;
let type = points >= 100 ? 'Gold': 'Silver';
console.log(type);



//Logical
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;// AND operator
console.log(eligibleForLoan);

let applicationRefused = !eligibleForLoan; // NOT operator

// Falsy - undefined, null, 0, false, '', NaN
// Truthy - Anything else
let userColor = undefined;
let defualtColor = "Black";
let currentColor = userColor || defualtColor;
console.log(currentColor);






//Bitwise

// 1 = 00000001 -- 8 bits(1 Byte)
// 2 = 00000010
// R = 00000011 = 3 OR
// R = 00000000 = 0 AND

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Read Write Execute
// 00000100
// 00000010
// 00000001
const read = 4;
const write = 2;
const execute = 1;
let myPermission = 0;
myPermission = write | execute; // OR to assign permission

let message = myPermission & read ? 'Yes': 'No'; // AND to check if permission is there
console.log(message);