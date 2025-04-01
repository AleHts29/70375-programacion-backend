module.exports = {
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => {
        if (b === 0) throw new Error("No se puede dividir por cero.");
        return a / b;
    }
}