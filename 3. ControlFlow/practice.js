function max(a, b) {
  return a > b ? a : b;
}

function isLandscape(width, height) {
  return width > height;
}

let number = max(3, 4);
console.log(number);

console.log(isLandscape(300, 600));

// FizzBuzz

const output = fizzBuzz(17);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  if (input % 3 == 0 && input % 5 == 0) return 'FizzBuzz';
  else if (input % 3 == 0) return 'Fizz';
  else if (input % 5 == 0) return 'Buzz';
  return input;
}
