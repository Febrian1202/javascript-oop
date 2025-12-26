// Constructor Inheritance
// Pewarisan / copy constructor lain : NamaConstructor.call(this.parameter)
function Employee (firstName) {
    this.firstName = firstName
    this.sayHello = function (name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`)
    }
}

function Manager (firstName, lastName) {
    this.lastName = lastName
    Employee.call(this, firstName)
}

const eko = new Manager("Eko", "Khannedy");
console.info(eko)