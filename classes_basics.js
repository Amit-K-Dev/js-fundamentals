// JavaScript class basics

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi, my name is " + this.name);
  }
}

const person1 = new Person("Amit", 27);
const person2 = new Person("Rahul", 25);

person1.greet();
person2.greet();