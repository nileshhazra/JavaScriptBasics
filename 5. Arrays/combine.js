const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
// first[0].id = 10;
// const slice = combined.slice(2);

// console.log(combined);
// console.log(slice);

const combined = [...first, "a", ...second, "b"];
console.log(combined);
const copy = [...combined];
console.log(copy);
