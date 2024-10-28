### **Notes on Problem 1: Two Sum**

# Intuition
The problem requires finding two numbers in an array that add up to a given target. My initial thought is to use a hash map to store the numbers and their indices as we iterate through the array. This allows us to efficiently check if the complement of the current number (i.e., target - current number) has already been encountered.

# Approach
1. Initialize an empty hash map to store numbers and their indices.
2. Iterate through the array of numbers.
3. For each number, calculate its complement with respect to the target.
4. Check if the complement is already in the hash map.
   - If it is, return the indices of the current number and its complement.
   - If not, store the current number and its index in the hash map.
5. If no such pair is found by the end of the iteration, return null or an empty list.

# Complexity
- Time complexity:  
  The time complexity is $$O(n)$$ because we iterate through the array once, and each lookup or insertion in the hash map takes constant time on average.

- Space complexity:  
  The space complexity is $$O(n)$$ because, in the worst case, we might store all numbers in the hash map.
