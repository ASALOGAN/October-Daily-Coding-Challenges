// Multiply two numbers represented as strings, we need to simulate the manual multiplication process
// that we do on paper. We multiply each digit of the first number with each digit of the second number, keeping track of
// the carry, and then sum up all the intermediate results to get the final product. We also need to handle the position
// of each digit correctly, just like how we shift the numbers when multiplying by tens, hundreds, etc., on paper.

// Function to multiply two numbers represented as strings
const multiply = (num1, num2) => {
    // If either number is "0", the result is "0"
    if (num1 === "0" || num2 === "0") return "0";
    
    // Initialize an array to store the result of multiplication
    // The maximum possible length of the result is the sum of the lengths of the two numbers
    let result = new Array(num1.length + num2.length).fill(0);
    
    // Loop through each digit of num1 from right to left
    for (let i = num1.length - 1; i >= 0; i--){
        // Loop through each digit of num2 from right to left
        for (let j = num2.length - 1; j >= 0; j--){
            // Multiply the current digits of num1 and num2
            let mul = (num1[i] - '0') * (num2[j] - '0');
            
            // Determine the positions in the result array to add the multiplication result
            let p1 = i + j, p2 = i + j + 1;
            
            // Add the multiplication result to the current position in the result array
            let sum = mul + result[p2];
            
            // Store the unit digit of the sum at position p2
            result[p2] = sum % 10;
            
            // Add the carry (tens digit of the sum) to the next position p1
            result[p1] += Math.floor(sum / 10);
        }
    }
    
    // Convert the result array to a string and remove any leading zeros
    let resultStr = result.join('').replace(/^0+/, '');
    
    // Return the result string, or "0" if the result is empty
    return resultStr.length > 0 ? resultStr : "0";
}

// Example usage of the multiply function
console.log(multiply("123", "456"));
