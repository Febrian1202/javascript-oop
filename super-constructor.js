class Employee {

    constructor(firstName) {
        this.firstName = firstName
    }

    sayHello(name) {
        console.info(`Hello ${name}, my name is employee ${this.firstName}`);
    }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName)
        this.lastName = lastName
    }
    sayHello(name) {
        console.info(`Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`);
    }
}

const budi = new Employee("Budi")
budi.sayHello('Joko')

const eko = new Manager("Eko", "Kurniawan")
eko.sayHello('Joko')

console.info(budi)
console.info(eko)