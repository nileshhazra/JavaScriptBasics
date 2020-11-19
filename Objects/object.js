const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};
// Enumerating properties of an Object
for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))
    console.log(key);

for (let entry of Object.entries(circle))
    console.log(entry);

if ('radius' in circle) console.log('yes');

const another = {};
// Old method for cloning object
 for (let key in circle)
    another[key] = circle[key];

console.log(another);

//New Method
const other = Object.assign({}, circle);
console.log(other);

// Simplest Way
const other1 = { ...circle};
console.log(other1);