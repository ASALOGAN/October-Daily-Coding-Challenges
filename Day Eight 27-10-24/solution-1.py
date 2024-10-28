from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        """
        Removes duplicates from a sorted list in-place and returns the number of unique elements.
        
        Args:
        nums (List[int]): A list of sorted integers where duplicates may exist.
        
        Returns:
        int: The number of unique elements in the list after removing duplicates.
        """
        # Check if the list is empty
        if not nums:
            return 0  # Return 0 if there are no elements in the list
        
        # Initialize left to 0, which will track the position of the next unique element
        left = 0
        # Iterate over the list starting from the second element
        for right in range(1, len(nums)):
            # Compare the current element with the last unique element
            if nums[left] != nums[right]:
                # If they are different, increment left and assign the current element to the position left
                left += 1
                nums[left] = nums[right]
        
        # Return the number of unique elements found, which is left + 1
        return left + 1

# Example usage of the Solution class to remove duplicates
nums = [1,1,2,3,3,4,5]
print(Solution().removeDuplicates(nums))  # Output should be 5, as there are 5 unique elements


