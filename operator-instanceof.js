class Employee {

}

class Manager extends Employee {

}

const febri = new Employee
const sheza = new Manager

console.info(typeof febri)
console.info(typeof sheza)

console.info(febri instanceof Employee)
console.info(febri instanceof Manager)
console.info(sheza instanceof Manager)
console.info(sheza instanceof Employee)