class Solution:
    def isValid(self, s):
        # Initialize an empty list to use as a stack for tracking opening brackets
        stack = []
        # Dictionary to map each type of opening bracket to its corresponding closing bracket
        map = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        
        # Iterate over each character in the input string
        for char in s:
            # If the character is an opening bracket, push it onto the stack
            if char in map:
                stack.append(char)
            else:
                # If the stack is empty, it means there's no matching opening bracket
                if not stack:
                    return False
                # Pop the top element from the stack, which should be the last unmatched opening bracket
                topElement = stack.pop()
                # Check if the popped element's corresponding closing bracket matches the current character
                if map[topElement] != char:
                    return False
        
        # If the stack is empty, all brackets were matched correctly; otherwise, return False
        return not stack

# Test the function with a sample input
solution = Solution()
print(solution.isValid("()"))