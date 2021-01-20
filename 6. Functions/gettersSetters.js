const person = {
  firstName: 'Nilesh',
  lastName: 'Hazra',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// getters: access properties
// setters: change or modify them

person.fullName = 'John Doe';
console.log(person.fullName);
