/*
1. Valid Parentheses:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// Function to determine if a string of parentheses is valid
const isValid = (s) => {
    // Initialize an empty stack to keep track of opening brackets
    const Stack = [];
    // Map to store the matching pairs of brackets
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i]; // Current character
        // If the character is an opening bracket, push it onto the stack
        if (map[char]) {
            Stack.push(char);
        } else {
            // If the character is a closing bracket, pop the top element from the stack
            const topElement = Stack.pop();
            // Check if the popped element matches the current closing bracket
            if (map[topElement] !== char) {
                return false; // If not, the string is not valid
            }
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return Stack.length === 0;
}

console.log(isValid("{}"));
