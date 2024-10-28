/**
 * Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * You can return the answer in any order.
 * 
 * Constraints:
 * 
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 */

// Function to find two indices in the array 'nums' whose values add up to the 'target'
const  twoSum = (nums, target) => {
    // Create a map to store numbers and their indices
    const numMap = new Map();
    
    // Iterate over the array 'nums'
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement of the current number
        const complement = target - nums[i];
        
        // Check if the complement is already in the map
        if (numMap.has(complement)) {
            // If found, return the indices of the complement and the current number
            return [numMap.get(complement), i];
        }
        
        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }
    
    // Return an empty array if no solution is found (though the problem guarantees a solution)
    return [];
}

console.log(twoSum([1, 2, 4, 6], 8))