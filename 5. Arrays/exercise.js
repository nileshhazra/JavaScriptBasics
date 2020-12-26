// const numbers = arrayFromRange(10, -10);
// console.log(numbers);

// function arrayFromRange(min, max) {
//   const arr = [];
//   while (min <= max) {
//     arr.push(min);
//     min++;
//   }
//   return arr;
// }

const numbers = [1, 2, 3, 4, 5];
// console.log(includes(numbers, 22));

// function includes(array, key) {
//   for (let element of array) if (element === key) return true;
//   return false;
// }

const output = except(numbers, [1, 3]);

console.log(output);

function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}
