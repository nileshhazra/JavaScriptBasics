const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [
  { id: 1, name: 'Node.js' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'C++' },
  { id: 4, name: 'Python' },
];

courses.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);

const nums = [1, -1, 2, 3];
const items1 = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items1);
