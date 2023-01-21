class Car {
  constructor(door, engine, color) {
    this.door = door;
    this.engine = engine;
    this.color = color;
  }
}

class Bike {
  constructor(engine, color) {
    this.engine = engine;
    this.color = color;
  }
}

class VehicleFactory {
  createVehicle(kind) {
    switch (kind) {
      case "car":
        return new Car(4, "petrol", "black");
      case "bike":
        return new Bike("petrol", "black");
    }
  }
}

const vehicleFactory = new VehicleFactory();
const car = vehicleFactory.createVehicle("car");
console.log(car);

const bike = vehicleFactory.createVehicle("bike");
console.log(bike);
