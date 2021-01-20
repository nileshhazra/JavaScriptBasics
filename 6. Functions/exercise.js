function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum(1, 2, 3, 4, 5));

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
circle.radius = 5;
console.log(circle.area);
