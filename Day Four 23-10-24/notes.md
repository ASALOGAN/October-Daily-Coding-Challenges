### **Notes on Problem 1: Valid Parentheses**

#### **Intuition**
The first thought is to ensure that every opening bracket has a corresponding closing bracket and they are in the correct order. By reading through the string one character at a time, we need to match each closing bracket with the most recent unmatched opening bracket, which can be efficiently handled using a stack.

#### **Approach**
1. We use a stack to keep track of opening brackets as we encounter them.
2. When we encounter a closing bracket, we check the top of the stack to see if it matches the corresponding opening bracket. If it matches, we pop the stack (remove the opening bracket). If it doesn't match, the string is invalid.
3. After processing all characters, the stack should be empty if the brackets were properly matched.
4. If the stack still contains elements, it means there were unmatched opening brackets, making the string invalid.

#### **Complexity**
- **Time complexity**:
  - $$O(n)$$, where `n` is the length of the input string. We process each character once.
  
- **Space complexity**:
  - $$O(n)$$, in the worst case where all the characters are opening brackets and are pushed onto the stack.

