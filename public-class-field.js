class Customer {

    firstName
    lastName
    balance = 0

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    sayHello() {

    }
}

const eko = new Customer("Febrian", "Syah")
console.info(eko)