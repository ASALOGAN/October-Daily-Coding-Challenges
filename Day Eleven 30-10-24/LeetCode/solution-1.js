/**
 * Problem 1: Best Time to Buy and Sell Stock
 * 
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * 
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * 
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 * Constraints:
 * - 1 <= prices.length <= 105
 * - 0 <= prices[i] <= 104
 */

/**
 * @param {number[]} prices - An array of stock prices where prices[i] is the price on the ith day.
 * @return {number} - The maximum profit that can be achieved from a single buy-sell transaction.
 */
const maxProfit = (prices) => {
  // Initialize the buy variable to the first day's price
  let buy = prices[0];
  // Initialize the profit variable to 0
  let p = 0;
  
  // Iterate over each price in the array
  for (let i = 0; i < prices.length; i++) {
    // If the current price is lower than the buy price, update the buy price
    if (buy > prices[i]) buy = prices[i];
    // Calculate the potential profit and update p if it's greater than the current p
    p > prices[i] - buy ? p : (p = prices[i] - buy);
  }
  
  // Return the maximum profit found
  return p;
};
