### **Notes on Problem 1: Remove Duplicates from Sorted Array**

# Intuition
The problem requires removing duplicates from a sorted array in-place. Since the array is already sorted, duplicates will be adjacent. This allows us to iterate through the array and compare each element with the previous one to identify duplicates.

# Approach
1. Check if the array is empty. If it is, return 0 as there are no elements.
2. Initialize a variable `k` to 1, which will track the position of the next unique element.
3. Iterate through the array starting from the second element (index 1):
   - If the current element is not equal to the previous element, it is unique.
   - Assign the current element to the position `k`.
   - Increment `k` to move to the next position for a unique element.
4. Return `k`, which represents the number of unique elements.

# Complexity
- Time complexity:  
  The time complexity is $$O(n)$$, where `n` is the number of elements in the array. This is because we iterate through the array once.

- Space complexity:  
  The space complexity is $$O(1)$$, as we are modifying the array in-place and using a constant amount of extra space.

