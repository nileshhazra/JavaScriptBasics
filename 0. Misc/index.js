function sayHi() {
  console.log(name);
  console.log(age);
  var name = "John"; // Undefined
  let age = 21; // Reference Error
}

sayHi();
