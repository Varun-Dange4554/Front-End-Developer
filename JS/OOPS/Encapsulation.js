class Car{
    #owner;
    constructor(x,y,z) {
        this.name = x,
        this.brand = y,
        this.#owner = z
        
    }
    showPrivetVariable(){
        return `this is private ${this.#owner}`
    }
}
let c1 = new Car("defender","landrover","varun");
console.log('🚀 ~ c1:', c1);
console.log('🚀 ~ c1:', c1.showPrivetVariable());


