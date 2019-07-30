// new keyword
function Vehicle(type,speed) {
    this.type = type;
    this.speed = speed;
}

//default values for the instance
Vehicle.prototype.wheels = 4;
Vehicle.prototype.move = function() {
    return `I am a ${this.type}. I move at a speed of ${this.speed}.`;
}
Vehicle.prototype.stop = function() { 
    return `I am a ${this.type}.  I have stopped moving !`;
}

function Car(speed) {
    Vehicle.call(this, "car", speed);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.emergencyStop = function () {
    this.abs = true; // abs is anti-breaking system
    this.stop(); // inherited from vehicle class
}

let myCar = new Car(10); 
console.log(myCar); // vehicle { type: 'car', speed: 10 }

myCar.move(); // I am a car, moving at a speed of 10
myCar.emergencyStop(); // I am a car, i stopped moving!
