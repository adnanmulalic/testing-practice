import { analyzeArray } from "../code/analyzeArray.js";


const object = analyzeArray([1, 2, 3, 4, 5]);
const anotherObject = analyzeArray([10, 6, 17, 2, 9, 3, 5]);

test('Average of an array of numbers', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({average: 3, min: 1, max: 5, length: 5});
})

test('Smallest number in array', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
})