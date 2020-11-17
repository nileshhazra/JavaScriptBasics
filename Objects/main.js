const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function (){
        console.log('Draw');
    }
}

// Factory Function
function createCircle(radius) { // Camel Naming
    return {
        radius,
        draw() {
            console.log('Draw');
        }
    };
  }

  const circle1 = createCircle(1);
  console.log(circle1);

  // Constructor Function
  function Circle(radius) { //Pascal Naming
      this.radius = radius;
      this.draw = function() {
          console.log('Draw');
      }
  }

  const circle2 = new Circle(1);
  console.log(circle.radius);

  // Dynamic nature of objects
  const person = {
      name: 'hello'
  }
  person.age = 20;
  console.log(person);
  delete person.age;
  console.log(person);