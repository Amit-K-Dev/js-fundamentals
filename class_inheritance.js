// JavaScript class inheritance example

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hi, my name is " + this.name);
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // calls the parent constructor
    this.course = course;
  }

  introduce() {
    console.log(
      "I am " + this.name + 
      ", studying " + this.course
    );
  }
}

const student1 = new Student("Amit", 27, "CA-Intermediate");

student1.greet();       // inherited method
student1.introduce();   // student method