const numbers = [1, 2, 3, 4];

const last = numbers.pop();
console.log(numbers);
console.log(last);

const first = numbers.shift();
console.log(numbers);
console.log(first);

numbers.push(10);
numbers.push(20);
numbers.push(30);
console.log(numbers);
numbers.splice(2,3); // delete 2, 3, 4
console.log(numbers);