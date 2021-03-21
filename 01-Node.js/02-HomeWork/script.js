const EventEmitter = require("events");

class Car extends EventEmitter {
    constructor(speed, maxSpeed) {
        super();
        this.speed = speed;
        this.maxSpeed = maxSpeed;
    }

    addSpeed(speed) {
        this.speed += speed;
        this.emit("checkSpeed", this.speed, this.maxSpeed);

    }

    setSpeed(speed) {
        this.speed = speed
        this.emit("checkSpeed", this.speed, this.maxSpeed);
    }
}

class CarMechanic {
    constructor(name, car) {
        this.name = name;
        this.car = car;

        car.on("checkSpeed", function(speed, maxSpeed) {
            if (speed > maxSpeed) {
                console.log("car has broken");
            } else {
                console.log("car okey");
            }
        });
    }
}

let car = new Car(20, 40);

let mech1 = new CarMechanic("den", car)

car.addSpeed(10);