class Person {
    // Constructor di class
    constructor(name) {
        // Property di class
        this.name = name
    }

    sayHello(name) {
        console.info(`Hi ${name}, my name is ${this.name}`)
    }
}

// Person.prototype.sayHello = function () { // Protype di class

// }

const sheza = new Person("Sheza")
const rian = new Person("Febrian")

sheza.sayHello(rian.name)
console.info(sheza.name)

sheza.sayHello(sheza.name)
console.info(rian.name)