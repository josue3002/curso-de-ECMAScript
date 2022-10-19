// declarando
class user {}
// instancia de una clase
//const newUser = new User();

class User {
    // metodos
    greeting() {
        return "Hello";
    }
};

const milortjem = new User();
console.log(milortjem.greeting());
const bebeloper = new User();
console.log(bebeloper.greeting());

// constructor

class User {
    // Constructor
    constructor() {
        console.log("Nuevo Usuario");
    }
    greeting() {
        return "Hello";
    }
}

const josue = new User();

// this 

class User {
 constructor(name) {
    this.name = name
 }
 // metodos
 speak() {
    return "Hello"
 }
 greeting() {
    return `${this.speak()} ${this.name}`;
 }
}

const katherin = new User("Katherin");
console.log(katherin.greeting());

// setters getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user ("Josue", 18);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);