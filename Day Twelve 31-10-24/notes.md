# Notes on Climbing Stairs Problem

## Intuition
The problem of climbing stairs can be thought of as a dynamic programming problem. Initially, it seems like a simple recursive problem where you can either take one step or two steps at a time. However, this can be optimized by recognizing that the number of ways to reach the nth step is the sum of the ways to reach the (n-1)th step and the (n-2)th step. This is because you can only arrive at step n from either step n-1 or step n-2.

## Approach
The approach involves using dynamic programming to store the number of ways to reach each step. We initialize the first two steps since they have straightforward solutions: 1 way to reach the first step and 2 ways to reach the second step. For each subsequent step, we calculate the number of ways to reach that step by summing the ways to reach the two preceding steps. This reduces the problem to a simple iterative solution with constant space.

## Complexity
- Time complexity: 
  The time complexity of this approach is $$O(n)$$ because we iterate through the steps from 3 to n, performing a constant amount of work for each step.

- Space complexity: 
  The space complexity is $$O(1)$$ because we only use a fixed amount of space to store the number of ways to reach the last two steps.

## Code
