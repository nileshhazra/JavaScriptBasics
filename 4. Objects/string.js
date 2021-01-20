const message = "   This is my 'first' message   ";

const another = new String('hi');

console.log(message.includes('fi'));

console.log(message.length);
console.log(message[2]);
console.log(message.includes('my'));
console.log(message.startsWith('This'));
console.log(message.endsWith('e'));
console.log(message.indexOf('my'));
let uppercase = message.toUpperCase();
console.log(uppercase);
let trimmed = message.trim();
console.log(trimmed);
let arr = trimmed.split(' ');
console.log(arr);
