
function PersonId() {
    this.firstName = "",
    this.lastName = "",
    // Method di constructor function
    this.sayHello = function (name) {
        console.info(`Hello ${name} my name is ${this.firstName}`)
    }

}

const febri = new PersonId();
febri.firstName = "Febrian";
febri.lastName = "Syah";
febri.sayHello("Joko")
const budi = new PersonId();
budi.firstName = "Budi";
budi.lastName = "Nugraha";
budi.sayHello("Joko")

console.log(febri);
console.log(budi);