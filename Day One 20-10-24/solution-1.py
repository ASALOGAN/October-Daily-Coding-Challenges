class Solution(object):
    def maxDistance(self, arrays):
        # Initialize the maximum distance to 0
        maxDist = 0
        
        # Set the initial minimum value to the first element of the first array
        minVal = arrays[0][0]
        
        # Set the initial maximum value to the last element of the first array
        maxVal = arrays[0][-1]
        
        # Iterate over the arrays starting from the second array
        for i in range(1, len(arrays)):
            # Get the current array
            currentArray = arrays[i]
            
            # Get the first element of the current array as the current minimum
            currentMin = currentArray[0]
            
            # Get the last element of the current array as the current maximum
            currentMax = currentArray[-1]
            
            # Update the maximum distance by comparing the current maximum distance
            # with the absolute differences between the current minimum and the global maximum,
            # and the current maximum and the global minimum
            maxDist = max(maxDist, abs(maxVal - currentMin), abs(currentMax - minVal))
            
            # Update the global minimum value
            minVal = min(minVal, currentMin)
            
            # Update the global maximum value
            maxVal = max(maxVal, currentMax)
        
        # Return the maximum distance found
        return maxDist

# Example usage of the Solution class to find the maximum distance
print(Solution().maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]]))
print(Solution().maxDistance([[1],[1]]))
