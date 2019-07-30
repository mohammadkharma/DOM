function Vehicle(type,speed) {
    this.type = type;
    this.speed = speed;
}

//default values for the instance
vehicle.prototype.speed=80;
vehicle.prototype.type="Vehicle";
vehicle.prototype.wheels=4;
vehicle.prototype.move=function() {
    return `I am a ${this.type}. I move at a speed of ${this.speed}.`;
}
vehicle.prototype.stop=function() { 
    return `I am a ${type}.  I have stopped moving !`;
}

console.log(Vehicle);

vehicle.stop();             //Prototype only creat default for instances.


let car=new vehicle("car",100);
console.log(car);             //vehicle { type: 'car', speed: 100 }


console.log(car.wheels);      //4
console.log(car.move());      //I am a car. I move at a speed of 100.
console.log(car.stop());      //I am a car. I've stopped moving!.


//OVERWRITTEN the default method : move

car.move=function(){
    return "Hello!";
}
console.log(car.move()); //Hello!

car.autoPilot=function() {

    return `This ${this.type} is on autopilot mode!`
}
console.log(car.autoPilot());    //This car is on autopilot mode!

