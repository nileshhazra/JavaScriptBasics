const numbers = [1, 2, -3, 4];

const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

const alLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(alLeastOnePositive);

const filtered = numbers.filter((x) => x >= 0);

console.log(filtered);
