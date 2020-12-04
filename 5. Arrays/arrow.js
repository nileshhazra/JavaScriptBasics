const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

const course = courses.findIndex(course => course.name === 'b');

console.log(course);