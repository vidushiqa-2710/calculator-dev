const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Unit Tests: Calculator Logic', () => {
    test('should correctly calculate addition', () => {
        expect(add(2, 3)).toBe(5);
    });
    test('should correctly subtract', () => {
        expect(subtract(10, 5)).toBe(5);
    });
    test('should throw error on division by zero', () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
});