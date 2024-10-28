class Solution:
    def twoSum(self, nums, target):
        """
        Function to find two indices in the array 'nums' whose values add up to the 'target'.
        
        :param nums: List[int] - List of integers.
        :param target: int - Target sum.
        :return: List[int] - Indices of the two numbers that add up to the target.
        """
        # Create a dictionary to store numbers and their indices
        num_map = {}
        
        # Iterate over the array 'nums'
        for i, num in enumerate(nums):
            # Calculate the complement of the current number
            complement = target - num
            
            # Check if the complement is already in the dictionary
            if complement in num_map:
                # If found, return the indices of the complement and the current number
                return [num_map[complement], i]
            
            # Store the current number and its index in the dictionary
            num_map[num] = i
        
        # Return an empty list if no solution is found (though the problem guarantees a solution)
        return []

# Example usage
solution = Solution()
print(solution.twoSum([1, 2, 4, 6], 8))
