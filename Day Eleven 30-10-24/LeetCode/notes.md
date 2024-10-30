# Intuition
The problem is about finding the maximum profit from a single buy-sell transaction. The key observation is that to maximize profit, we need to buy at the lowest price before selling at a higher price. Thus, we need to track the minimum price encountered so far and calculate potential profits at each step.

# Approach
1. Initialize a variable `buy` to track the minimum price encountered so far, starting with the first price.
2. Initialize a variable `p` to track the maximum profit, starting with 0.
3. Iterate through the prices:
   - If the current price is lower than `buy`, update `buy` to the current price.
   - Calculate the potential profit by subtracting `buy` from the current price.
   - If this potential profit is greater than `p`, update `p`.
4. Return `p` as the maximum profit.

# Complexity
- Time complexity: 
  The algorithm iterates through the list of prices once, resulting in a time complexity of $$O(n)$$, where $$n$$ is the number of days (length of the prices array).

- Space complexity:
  The algorithm uses a constant amount of extra space, resulting in a space complexity of $$O(1)$$.
