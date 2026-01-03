class Person {
    sayHello(name) {
        if (name) {
            this.#sayWithName(name)
        } else {
            this.#sayWithoutName()
        }
    }

    #sayWithoutName() { /* Private method JavaScript */
        console.info("Hello")
    }

    #sayWithName(name) { /* Private method JavaScript */
        console.info(`Hello ${name}`)
    }
}

const febri = new Person()
eko.sayHello("Joko")
eko.#sayWithoutName() // tak bisa diakses dari luar class