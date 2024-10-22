# Letter Combinations of a Phone Number - Notes

### Intuition
The task is to generate all possible letter combinations that a given number (2-9) could represent, similar to the way letters map to numbers on a phone keypad.

### Approach
1. **Base Case:** If the input string is empty, return an empty array.
2. **Recursive Backtracking:** For each digit in the input string, get the corresponding letters from the phone map and recursively generate all combinations by appending one letter at a time.
3. **Key Idea:** Using a recursive helper function to backtrack through all the potential combinations for each digit.

### Time and Space Complexity
- **Time Complexity:** O(4^n), where n is the length of the input string `digits`. In the worst case, each digit can map to 4 letters.
- **Space Complexity:** O(n), where n is the depth of the recursive call stack.

