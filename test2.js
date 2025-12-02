//let message: string = 'Hello World';
//console.log(message);
function sayHello(name) {
    console.log('Hello, ' + name);
}
sayHello('VS Code with typesetting');
// The toString()function
var Num1 = 123;
console.log(Num1.toString());
console.log(Num1.toString(16));
console.log(Num1.toString(8));
console.log(Num1.toString(2));
console.log('Type Script Classes Example:');
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "Hi, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    Person.prototype.greet = function () {
        console.log("Hello, I'm ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
var person1 = new Person("Ali", 25);
console.log(person1.introduce());
person1.greet();
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
        // Initialize properties
    }
    return Person2;
}());
var john = new Person2('Adam', 20);
console.log("Name: ".concat(john.name, ", Age: ").concat(john.age));
