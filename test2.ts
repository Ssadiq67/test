//let message: string = 'Hello World';
//console.log(message);



function sayHello(name:string) {
  console.log('Hello, ' + name);
}

sayHello('VS Code with typesetting');
// The toString()function
let Num1: number = 123;
console.log(Num1.toString()); 
console.log(Num1.toString(16)); 
console.log(Num1.toString(8)); 
console.log(Num1.toString(2));

console.log('Type Script Classes Example:');


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greet() {
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const person1 = new Person("Ali", 25);
console.log(person1.introduce());
person1.greet();
class Person2 {
    constructor(public name: string, public age: number) {
        // Initialize properties
    }
    
}

const john = new Person2('Adam', 20);
console.log(`Name: ${john.name}, Age: ${john.age}`);


