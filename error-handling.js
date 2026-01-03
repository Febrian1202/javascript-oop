class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            // const error = new Error("Total parameter harus lebih dari 0")
            // throw error
            throw new Error("Total parameter harus lebih dari 0")
        }
        let total = 0;
        for (const number of numbers) {
            total += number
        }
        return total
    }
}

try { // Akan dieksekusi pertama kali
    console.info(MathUtil.sum(1, 2, 3, 4, 5, 6))
    console.info("Febri")
} catch (error) { // Akan dieksekusi kalau blok try{} terjadi error
    console.info(`Terjadi error : ${error.message}`)
} finally { // Pasti akan dieksekusi di akhir mau ada error ataupun tidak
    console.info("Kode Program Selesai")
}

console.info("Syah")

class Counter {

    #counter = 0

    next() {
        try {
            return this.#counter;
        } finally {
            this.#counter++
        }
    }
}

const counter = new Counter()
console.info(counter.next())
console.info(counter.next())
console.info(counter.next())
console.info(counter.next())
console.info(counter.next())