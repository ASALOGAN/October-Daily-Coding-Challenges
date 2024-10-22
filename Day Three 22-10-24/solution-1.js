// Letter Combinations of a Phone Number:
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
// that the number could represent. Return the answer in any order.
//
// A mapping of digits to letters (just like on the telephone buttons) is given below. 
// Note that 1 does not map to any letters.
//
// Constraints:
// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


// The function `letterCombinations` generates all possible letter combinations 
// that the number could represent on a phone keypad, given a string of digits.
// If the input `digits` is empty, it returns an empty array.

const letterCombinations = (digits) => {
    if (!digits.length) return []; // Return an empty array if no digits are provided.

    // Mapping of digits to corresponding letters on a phone keypad.
    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = []; // Array to store the resulting combinations.

    // Helper function to perform backtracking.
    function backtrack(index, path) {
        // If the current path length equals the digits length, a valid combination is formed.
        if (index === digits.length) {
            result.push(path); // Add the current combination to the result array.
            return; // Exit the function.
        }

        // Get the letters corresponding to the current digit.
        const letters = phoneMap[digits[index]];
        // Iterate over each letter and continue building the combination.
        for (let letter of letters) {
            backtrack(index + 1, path + letter); // Recursive call to build the next level of the combination.
        }
    }

    backtrack(0, ''); // Start the backtracking process with an empty path.
    return result; // Return the array of all possible combinations.
}
