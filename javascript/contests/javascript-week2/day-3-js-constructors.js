//Write your constructor below this line
function Car(name, mileage, max_speed) {
    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;
}

//Don't edit anything below this line.
function processData(input) {
    var my_car = new Car(input[0], input[1], input[2])
    console.log(my_car.name);
    console.log(my_car.mileage);
    console.log(my_car.max_speed);
}