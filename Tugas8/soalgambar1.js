class vehicle {
    constructor(brand){
        this.brand = brand;
    }

    start(){
        return `${this.brand} vehicle starting`;
    }
}

class car extends vehicle{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }
    start(){
        return `${this.brand} ${this.model} car starting`;
    }
}
let car1 = new car("honda", "civic");
console.log(car1.start())