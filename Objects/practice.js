let address = {
    street: '22B Baker Street.',
    city: 'London',
    zipcode: 432002,
}

function showAdress(address) {
    for (let key in address)
        console.log(key, address[key]);
}

showAdress(address);