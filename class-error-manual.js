// Contoh class error manual
class ValidationError extends Error {
    constructor(message, field) {
        super(message)
        this.field = field
    }
}

class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            // const error = new Error("Total parameter harus lebih dari 0")
            // throw error
            throw new ValidationError("Total parameter harus lebih dari 0", "numbers")
        }
        let total = 0;
        for (const number of numbers) {
            total += number
        }
        return total
    }
}

try { // Akan dieksekusi pertama kali
    console.info(MathUtil.sum())
    console.info("Febri")
} catch (error) { // Akan dieksekusi kalau blok try{} terjadi error
    if (error instanceof ValidationError) {
        console.info(`Terjadi error di field ${error.field} dengan error ${error.message}`)
    } else {
        console.info(`Terjadi error : ${error.message}`)
    }
} finally { // Pasti akan dieksekusi di akhir mau ada error ataupun tidak
    console.info("Kode Program Selesai")
}

console.info("Syah")