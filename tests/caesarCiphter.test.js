import { caesarCipher } from "../code/caesarCipher.js";

test('Caesars cipher', () => {
    expect(caesarCipher('Hello, World! xyz?', 3)).toStrictEqual('Khoor, Zruog! abc?');
})