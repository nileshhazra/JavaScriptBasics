// For in Loops
// in Objects
const person = {
  name: "Bill",
  age: 33,
};

for (let key in person) console.log(key, person[key]);

// in Arrays
const colors = ["red", "green", "blue"];

for (let index in colors) console.log(index, colors[index]);

// For of
for (let color of colors) console.log(color);
