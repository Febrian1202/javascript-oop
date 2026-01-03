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

console.info(MathUtil.sum())
const result = MathUtil.sum(1, 2, 3, 4, 5, 6)
console.info(result)