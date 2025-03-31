class Car {
    constructor (brand,model,year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car = new Car('Toyota','corolla',2020);
car.color ='red'
car.year = '2022'

console.log(car);