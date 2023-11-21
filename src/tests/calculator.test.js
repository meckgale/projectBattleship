const calculator = require('../scripts/calculator.js');

test('each of basic calculator operations should take two numbers and return the correct calculation', () => {
    expect(calculator.add(8, 4)).toBe(12);
    expect(calculator.subtract(8, 4)).toBe(4);
    expect(calculator.divide(8, 4)).toBe(2);
    expect(calculator.multiply(8, 4)).toBe(32);
});