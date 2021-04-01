const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const { expect } = require('chai');

describe('testForMultiplyFunction', function() {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 42 when called with numbers 6 and 7', function() {
        expect(calculator.multiply(6, 7)).to.be.equal(42);
    });

    it('should return -42 when called with numbers -6 and 7', function() {
        expect(calculator.multiply(-6, 7)).to.be.equal(-42);
    });

    it('should return 0 when called with numbers 0 and -7', function() {
        expect(calculator.multiply(0, -7)).to.be.equal(0);
    });

    it('should return 42.12 when called with numbers 5.4 and 7.8', function() {
        expect(calculator.multiply(5.4, 7.8)).to.be.equal(42.12);
    });
});