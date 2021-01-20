// Rest operator
function sum(discount, ...prices) {
  // ..prices is REST Parameter & it must be the last parameter
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));
