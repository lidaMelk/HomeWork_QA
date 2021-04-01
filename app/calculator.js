class Calculator {
    constructor() {}

    add(value1, value2) {
        return +(value1 + value2).toFixed(3);
    }
    multiply(value1, value2) {
        return +(value1 * value2).toFixed(3);
    }
}

module.exports = Calculator;