import { capitalize } from "../code/capitalize.js";

test('Capitalize first letter of string', () => {
    expect(capitalize("letter")).toBe("Letter");
})