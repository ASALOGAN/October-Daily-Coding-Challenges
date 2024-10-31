class Solution:
    def climbStairs(self, n: int):
        # If there are 1 or 2 steps, the number of ways to climb is equal to 'n' itself
        if (n <= 2):
            return n
        
        # Initialize variables to store the number of ways to reach the first and second steps
        f = 1  # Number of ways to reach the first step
        s = 2  # Number of ways to reach the second step
        
        # Loop from the third step to the nth step
        for i in range(3, n+1):
            # Calculate the number of ways to reach the current step
            t = f + s
            # Update 'f' to be the number of ways to reach the previous step
            f = s
            # Update 's' to be the number of ways to reach the current step
            s = t
        
        # Return the number of ways to reach the nth step
        return s
    
# Call the climbStairs method with 5 and print the result
print(Solution().climbStairs(5))
