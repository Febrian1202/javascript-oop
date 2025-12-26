// Parameter di dalam function class
function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    // Method di constructor function
    this.sayHello = function (name) {
        console.info(`Hello ${name} my name is ${this.firstName}`)
    }

}

const febri = new Person("Muhammad", "Febrian");
febri.sayHello("Joko");

console.log(febri)