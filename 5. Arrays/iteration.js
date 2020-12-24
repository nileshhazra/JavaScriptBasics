// const numbers = [1, 2, 3];

// for (let number of numbers) console.log(number);

// numbers.forEach((number, index) => console.log(index, number));

// const joined = numbers.join(".");
// console.log(typeof joined);
// console.log(joined);

const message = "This.is.my.first.message";
console.log(message);
const parts = message.split(".");
// console.log(parts);
let num = [];
while (parts.length != 0) {
  num.push(parts.pop());
}
// console.log(num);
const answer = num.join(".");
console.log(answer);
