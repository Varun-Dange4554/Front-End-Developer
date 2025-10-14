class Car{
    constructor(n,b){
        this.name = n;
        this.brand = b;
    }


showDetails(){
    console.log(`${this.name} ${this.brand}`);
    return   `${this.name} ${this.brand} ${this.buyer}`
}
}

// let c1= new Car("desire","suzuki");
// console.log(c1)
// console.log(c1.showDetails());

class SUV extends Car{
    constructor(x,y,z){
        super(x,y)
        this.buyer = z;
    }
}

// let c1 = new SUV("defender","landrover","varun")
// console.log('🚀 ~ c1:', c1);
// console.log(c1.showDetails());


class MiniSUV extends SUV{
    constructor(x,y,z,m){
        super(x,y,z)
        this.look = m
    }

}
let c1 = new MiniSUV("defender","landrover","varun","sporty");
console.log('🚀 ~ c1:', c1);


