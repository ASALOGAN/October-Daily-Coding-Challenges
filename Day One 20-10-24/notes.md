### **Notes on Problem 1: Maximum Distance in Arrays**

#### **Intuition**
The problem is about finding the maximum distance between two elements, where the two elements come from different arrays within the input list of arrays. The "distance" between two elements is simply the absolute difference between their values.

The key to finding the maximum distance is to focus on comparing the minimum and maximum elements from different arrays. If we keep track of the initial minimum and maximum values as we iterate through the arrays, we can compute the distance between the current array's extremes (max and min) and the initial global extremes.

#### **Approach**
1. Initialize `maxDist` to 0, which will store the maximum distance.
2. Start by assigning the minimum and maximum values of the first array to `minVal` (initial value of the array) and `maxVal` (last value of the array), respectively.
3. Iterate through the remaining arrays. For each array:
   - Extract the minimum (`currentMin`) and maximum (`currentMax`) of the current array.
   - Calculate the distance between the global `maxVal` (from previous arrays) and `currentMin`, as well as between `currentMax` and the global `minVal`.
   - Update `maxDist` with the maximum of these distances.
   - Update `minVal` and `maxVal` with the current array's minimum and maximum, respectively, to continue the process.
4. Return the largest `maxDist` found.

This approach works efficiently since we are only tracking the initial minimum and maximum values and updating them as we iterate through the arrays.

#### **Complexity**

- **Time Complexity:**  
  We are iterating over each array once and examining their first and last elements, so the overall time complexity is `O(n)`, where `n` is the number of arrays.

- **Space Complexity:**  
  We only use a few extra variables (`minVal`, `maxVal`, `maxDist`), so the space complexity is `O(1)` (constant space).

### **Notes on Problem 2: Multiply Strings**

#### **Intuition**
The challenge is to multiply two numbers represented as strings without converting them directly to integers. The problem is similar to how we perform multiplication by hand: multiplying digit by digit, carrying over when necessary, and summing up partial results.

Since the input numbers are represented as strings, we need to simulate the multiplication process manually and accumulate the results digit by digit in a result array.

#### **Approach**
1. If either `num1` or `num2` is `"0"`, return `"0"` immediately.
2. Initialize an array `result` to store the intermediate results of the multiplication. The length of this array is equal to the sum of the lengths of `num1` and `num2`, as this is the maximum possible length of the result.
3. Loop through the digits of `num1` from right to left and multiply each digit of `num1` by each digit of `num2`, starting from the rightmost digits of both numbers.
4. Add the product of two digits to the corresponding position in the `result` array. Keep track of the carry and distribute it to the next position in the array.
5. After completing all digit multiplications, join the `result` array into a string, removing any leading zeros.
6. Return the resulting string, which represents the product of `num1` and `num2`.

#### **Complexity**

- **Time Complexity:**
  The time complexity is `O(n * m)`, where `n` is the length of `num1` and `m` is the length of `num2`. This is because we perform a multiplication for each pair of digits.

- **Space Complexity:**
  The space complexity is `O(n + m)` because we store the result of the multiplication in an array of length equal to the sum of the lengths of the input strings.
