// new keyword

function vehicle(type,speed) {
    this.type = type;
    this.speed = speed;

    this.move = function() {
        console.log(`I am ${this.type}, moving at a speed of ${this.speed}`);
        
    }

    this.stop = function() {
        console.log(`I am a ${this.type}, i ave stopped moving!`);
        
    }

    console.log(`I am a ${this.type}. I move at a speed of ${this.speed}.`);
    
}

// vehicle("car", 80);                // I am a car. I move at a speed of 80.
// vehicle ("truck", 280);            // I am a truck. I move at a speed of 280.

let car = new vehicle("car", 80);      // I am a car. I move at a speed of 80.
console.log(car);                      // vehicle { type: 'car', speed: 80, move: [Function], stop: [Function] }

car.move();                           // I am car, moving at a speed of 80

console.log(vehicle);                 // [Function: vehicle]

let bus = new vehicle("bus", 200);    // I am a bus. I move at a speed of 200.
console.log(bus);                     // vehicle { type: 'bus', speed: 200, move: [Function], stop: [Function] }
bus.stop();                           // I am a bus, i ave stopped moving!

vehicle.viper = function() {
    console.log(`The vehicle has a viper`);   

}
vehicle.viper();                            // The vehicle has a viper

let truck = new vehicle("truck", 280);      // I am a truck. I move at a speed of 280.
console.log(truck);                         // vehicle { type: 'truck', speed: 280, move: [Function], stop: [Function] }

vehicle.viper();                            //The vehicle has a viper

console.log(vehicle);                       // { [Function: vehicle] viper: [Function] }