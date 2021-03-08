class Car {
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    get brand1() {
        return this.brand;
    }
    get speed1() {
        return this.speed;
    }

    print(){
        console.log(`brand : ${this.brand1} speed : ${this.speed1}`)
    }
}

let c1 = new Car('Toyota', 120);
let c2 = new Car('Alfa Romeo', 200);
let c3 = new Car('Suzuki Alto', 90);
let c4 = new Car('Tesla', 250);

c1.print();
c2.print();
c3.print();
c4.print();

let carsArr = [c1, c2, c3, c4];
let speedCar = carsArr.reduce((max,car)=>{
return max.speed1 > car.speed1 ? max : car;
})

let newOrder = carsArr.sort((a, b)=>{
    return a.speed1 - b.speed1
})


console.log(newOrder);

