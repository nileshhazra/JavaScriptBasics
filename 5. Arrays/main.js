const numbers = [3, 4];

numbers.push(3);
numbers.unshift(1, 2);
numbers.splice(2, 0,'a', 'b');

// Finding Primitives
console.log(numbers);
console.log(`Index of 'a': ${numbers.indexOf('a')}`);
console.log(`Last Index of 3: ${numbers.lastIndexOf(3)}`);
console.log(numbers.includes('a')); // true

// Finding References
const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

console.log(courses.includes({id: 1, name: 'a'})); // Not work : false(wrong)
const course = courses.findIndex(function(course) {
    return course.name === 'b';
});

console.log(course);

