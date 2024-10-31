/*
 * Problem 1: Climbing Stairs
 * 
 * You are climbing a staircase. It takes n steps to reach the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Constraints:
 * - 1 <= n <= 45
*/

// Function to calculate the number of distinct ways to climb a staircase with 'n' steps
const climbStairs = (n) => {
    // If there are 1 or 2 steps, the number of ways to climb is equal to 'n' itself
    if (n <= 2) return n;

    // Initialize variables to store the number of ways to reach the first and second steps
    let f = 1, s = 2;
    // Loop from the third step to the nth step
    for (let i = 3; i <= n; i++){
        // Calculate the number of ways to reach the current step
        let t = f + s;
        // Update 'f' to be the number of ways to reach the previous step
        f = s;
        // Update 's' to be the number of ways to reach the current step
        s = t;
    }

    // Return the number of ways to reach the nth step
    return s;
}

// Example usage: Calculate the number of ways to climb a staircase with 5 steps
console.log(climbStairs(5));