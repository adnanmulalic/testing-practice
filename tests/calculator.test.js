import { calculator } from "../code/calculator.js";

test('Add two numbers', () => {
    expect(calculator.add(1,2)).toEqual(3);
})

test('Subtract two numbers', () => {
    expect(calculator.subtract(1,1)).toEqual(0);
})

test('Divide two numbers', () => {
    expect(calculator.divide(4,2)).toEqual(2);
})

test('Multiply two numbers', () => {
    expect(calculator.multiply(2,2)).toEqual(4);
})