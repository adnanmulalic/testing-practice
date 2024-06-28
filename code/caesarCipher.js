export function caesarCipher(string, shiftFactor) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let cipherString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[a-z]/i)) {
            let cipherIndex = alphabet.search(string[i].toLowerCase()) + shiftFactor; // find index of letter in alphabet and add shift factor for new index
            cipherIndex > 25 ? cipherIndex -= 26 : null; // if index is greater then alphabet length, reduce index by alphabet length to get proper index from start
            string[i].match(/[a-z]/) ? cipherString += alphabet[cipherIndex] : cipherString += alphabet[cipherIndex].toUpperCase(); // if letter at i position is lowercase add new letter, otherwise add new letter uppercased
        } else {
            cipherString += string[i];
        };
    }
    return cipherString;
};