class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        alert(`Hello my name is ${this.name} and I am ${this.age} years old.`);
    }
    sleep() {
        alert(`${this.name} is going to sleep now!`);
    }
}



let p1 = new Person('Robert', 34);
let p2 =  new Person('Drew', 23);

p1.sayHello();
p2.sayHello();
p1.sleep();