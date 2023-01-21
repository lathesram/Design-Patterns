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

class CarFactory {
  createCar(color) {
    switch (color) {
      case "red":
        return new Car(4, "petrol", "red");
      case "black":
        return new Car(2, "petrol", "black");
    }
  }
}

class BikeFactory {
  createBike(color) {
    switch (color) {
      case "red":
        return new Bike("petrol", "red");
      case "black":
        return new Bike("petrol", "black");
    }
  }
}

const carFactory = new CarFactory();
const bikeFactory = new BikeFactory();

class VehicleFactory {
  createVehicle(kind, color) {
    switch (kind) {
      case "car":
        return carFactory.createCar(color);
      case "bike":
        return bikeFactory.createBike(color);
    }
  }
}

const vehicleFactory = new VehicleFactory();
const redCar = vehicleFactory.createVehicle("car", "red");
const blackBike = vehicleFactory.createVehicle("bike", "black");

console.log(redCar, blackBike);
