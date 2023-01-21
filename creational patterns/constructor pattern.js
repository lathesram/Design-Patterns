class Car {
  constructor(door, engine, color) {
    this.door = door;
    this.engine = engine;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(door, engine, color) {
    super(door, engine, color);
    this.seats = 6;
  }
}

const civic = new Car(4, "petrol", "black");
const suv = new SUV(4, "petrol", "black");

console.log(civic);
console.log(suv);
