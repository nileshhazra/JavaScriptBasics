const numbers = [1, 2, -3, 4];
const filtered = numbers.filter((x) => x >= 0);

// const items = filtered.map((n) => "<li>" + n + "</li>");
// const html = "<ul>" + items.join("") + "</ul>";
// console.log(html);

const items = filtered.map((n) => ({ value: n }));

console.log(items);

let str = 'listen';
let newStr = [2, 1, 0, 4, 5, 3].map((i) => str[i]).join('');
console.log(newStr);
