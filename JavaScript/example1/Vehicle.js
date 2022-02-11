
class Vehicle {
    brand = null;
    type = null;
    color = null;
    price = null;
    speed = 0;

    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
    // constructor(brand, type, price, color){
    //     this.brand = brand;
    //     this.type = type;
    //     this.price = price;
    //     this.color = color;
    // }

    set brand(value) {
        this._brand = value;
    }
    set type(value) {
        this._type = value;
    }
    set price(value) {
        this._price = value;
    }
    set color(value) {
        this._color = value;
    }

    get brand() {
        return this._brand;
    }
    get type() {
        return this._type;
    }
    get price() {
        return this._price
    }
    get color() {
        return this._color;
    }

    forward(speed) {
        console.log("the vehicle is go forward with speed ", speed, "khm");
    }
    turnLeft(speed) {
        console.log("the vehicle is turn left with speed ", speed, "khm");
    }
    turnRight(speed) {
        console.log("the vehicle is turn right with speed ", speed, "khm");
    }
    stop() {
        console.log("the vehicle is stop");
    }
}

class Bicycle extends Vehicle {

}

class Motorbike extends Vehicle {

}

class Car extends Vehicle {

}

class Mountain extends Vehicle {

}


var test = new Vehicle("honda", "new");
test.turnLeft(10);