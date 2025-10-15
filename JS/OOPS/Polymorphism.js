//  we have method available in mutiple class that call poly

// polimorphisum is basically you have a method/property in multiple object

class Vehicle {
    run(){
        console.log("vehicle is running");
    }
}

class car1 {
    run(){
        console.log("car is running");
    }
}

class Truck {
    run(){
        console.log("truck is running");
    }
}

let v1  = new Vehicle;
let v2 = new car1;
let v3 = new Truck;

v1.run();
v2.run();
v3.run();


// this id differnt example of polymorphisum

class Animal{
    speak(){
        console.log("Animal speak")
    }
}


class Dog extends Animal{
    speak(){
        console.log("Dog barks")
    }
}

class Cat extends Dog{
    speak(){
        console.log("Cat meows")
    }
}

function makeSound(Animal){
    Animal.speak(); // pplymorphism behaviour
}

let dog = new Dog();
let cat = new Cat();

makeSound(dog); // DOg barks
makeSound(cat); // Cat meows



// this is with object no class method 

const printer = {
    print:()=>console.log("Default print")
};

const pdfprinter = {
    print:()=>console.log("print pdf")
};

const htmlprinter = {
    print:()=>console.log(" print HTML")
};

function startPrint(printerObj){
    printerObj.print();
}

startPrint(pdfprinter); // print pdf
startPrint(htmlprinter);  // print HTML