
class ToyotaCar {

    constructor(brand) {
        this.brand = brand
        console.log('Creating constructor!!')
    }

    start() {
        console.log('Start')
    }

    stop() {
        console.log('Stop')
    }

}

let fortuner = new ToyotaCar('fortuner');
let lexus = new ToyotaCar('lexus');
console.log(fortuner)
console.log(lexus)


// Basic inheritance..

class Parent {
    skin_color() {
        console.log('Dark')
    }
    parent() {
        console.log('Parents')
    }
}

class Child extends Parent {
    child() {
        console.log('Child')
    }
}

let parent = new Parent();
let child = new Child();
console.log(child.skin_color);


class Person {
    constructor(name) {
        this.spices = 'homo';
        this.name = name;
    }

    sleep() {
        console.log('Sleep')
    }
}

class Engineer extends Person {
    
    constructor(branch, name) {
        super(name);
        this.branch = branch
    }

    work() {
        super.sleep();
        console.log('Problem solving, build somthing new')
    }
}

let obj1 = new Engineer('Mechanical', 'Drisso');
console.log(obj1);