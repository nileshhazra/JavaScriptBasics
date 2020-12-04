let address = {
    street: '22B Baker Street.',
    city: 'London',
    zipcode: 432002,
};

function showAdress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAdress(address);

//Factory function
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
let add = createAddress('a', 'b', 'c');
console.log(add);

//constructor fun
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
add1 = new Address('a', 'b', 'c');
add2 = new Address('a', 'b', 'c');
add3 = add1;
console.log(add1);

//
function areEqual(add1, add2) {
    return add1.street === add2.street && add1.city === add2.city && add1.zipCode === add2.zipCode;
}


function areSame(add1, add2) {
    return add1 === add2;
}

console.log(areEqual(add1, add2));
console.log(areSame(add1, add2));
console.log(areSame(add1, add3));
