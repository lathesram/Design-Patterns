let instance = null;

class Car {
  constructor(door, engine, color) {
    if (!instance) {
      this.door = door;
      this.engine = engine;
      this.color = color;
      instance = this
    } else {
      return instance;
    }
  }
}

// class SUV extends Car {
//   constructor(door, engine, color) {
//     super(door, engine, color);
//     this.seats = 6;
//   }
// }

const civic = new Car(4, "petrol", "black");
const suv = new Car(2, "Diesel", "red"); // this won't be created

console.log(civic);
console.log(suv);
