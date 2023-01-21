let instance = null;

class Car {
  constructor(door, engine, color) {
    if (!instance) {
      this.door = door;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const civic = new Car(4, "petrol", "black");
const suv = new Car(2, "Diesel", "red"); // this won't be created

console.log(civic);
console.log(suv);
