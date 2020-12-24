let numbers = [1, 2, 3, 4];
let another = numbers;
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);

// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// numbers.push(10);
// numbers.push(20);
// numbers.push(30);
// console.log(numbers);
// numbers.splice(2,3); // delete 2, 3, 4
// console.log(numbers);

// numbers = [];
numbers.length = 0;
// numbers.splice(0, numbers.length);
// while (numbers.length > 0) numbers.pop(); //not memory efficient for larger arrays

console.log(numbers);
console.log(another);
