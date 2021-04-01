const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const { expect } = require('chai');

describe('testForAddFunction', function() {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 9 when called with numbers 5 and 4', function() {
        expect(calculator.add(5, 4)).to.be.equal(9);
    });

    it('should return -1 when called with numbers -5 and 4', function() {
        expect(calculator.add(-5, 4)).to.be.equal(-1);
    });

    it('should return -9 when called with numbers -5 and -4', function() {
        expect(calculator.add(-5, -4)).to.be.equal(-9);
    });

    it('should return 6.86 when called with numbers 2.3 and 4.56', function() {
        expect(calculator.add(2.3, 4.56)).to.be.equal(6.86);
    });

    it('should return 4 when called with numbers 0 and 4', function() {
        expect(calculator.add(0, 4)).to.be.equal(4);
    });
});