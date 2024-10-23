const isValidParentheses = (s: string): boolean => {
  // Initialize an empty stack to keep track of opening brackets
  const stack: string[] = [];
  // Map to store the matching pairs of brackets
  const bracketPairs: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Iterate over each character in the string
  for (let i = 0; i < s.length; i++) {
    const char: string = s[i]; // Current character
    // If the character is an opening bracket, push it onto the stack
    if (map[char]) {
      stack.push(char); // Use lowercase 'stack'
    } else {
      // If the character is a closing bracket, pop the top element from the stack
      const topElement: string | undefined = stack.pop(); // Use lowercase 'stack'
      // Check if the popped element matches the current closing bracket
      if (!topElement || map[topElement] !== char) {
        // Added check for undefined topElement
        return false; // If not, the string is not valid
      }
    }
  }

  // If the stack is empty, all brackets were matched correctly
  return stack.length === 0; // Use lowercase 'stack'
};
