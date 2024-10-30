from typing import List

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Initialize the minimum price to the first element in the list
        minPrice = prices[0]
        # Initialize the maximum profit to 0, as no transactions have been made yet
        maxProf = 0
        
        # Iterate over each price in the list
        for price in prices:
            # If the current price is less than the minimum price encountered so far, update minPrice
            if price < minPrice:
                minPrice = price
            # Calculate the potential profit by selling at the current price after buying at minPrice
            potentialProfit = price - minPrice
            # Update maxProf if the potential profit is greater than the current maxProf
            if potentialProfit > maxProf:
                maxProf = potentialProfit
        
        # Return the maximum profit that can be achieved
        return maxProf