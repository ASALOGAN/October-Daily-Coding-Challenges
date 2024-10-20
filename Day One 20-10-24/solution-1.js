// 1. Maximum Distance in Arrays:
// Multiple arrays, where each array is sorted in ascending order.

// Pick up two integers from two different arrays (each array picks one) and calculate the distance.
// We define the distance between two integers a and b to be their absolute difference | a - b |.

// Return the maximum distance.

//Constraints:

// m == arrays.length
// 2 <= m <= 105
// 1 <= arrays[i].length <= 500
// -104 <= arrays[i][j] <= 104
// arrays[i] is sorted in ascending order.
// There will be at most 105 integers in all the arrays.

const maxDistance = (arrays) => {
    // Initialize the maximum distance to 0
    var maxDist = 0;

    // Set the initial minimum value to the first element of the first array
    var minVal = arrays[0][0];

    // Set the initial maximum value to the last element of the first array
    var maxVal = arrays[0].at(-1);

    // Iterate over the arrays starting from the second array
    for (var i = 1; i < arrays.length; i++){
        // Get the current array
        var currentArray = arrays[i];

        // Get the first element of the current array as the current minimum
        var currentMin = currentArray[0];

        // Get the last element of the current array as the current maximum
        var currentMax = currentArray.at(-1);

        // Update the maximum distance by comparing the current maximum distance
        // with the absolute differences between the current minimum and the global maximum,
        // and the current maximum and the global minimum
        maxDist = Math.max(maxDist, Math.abs(maxVal - currentMin), Math.abs(currentMax - minVal));

        // Update the global minimum value
        minVal = Math.min(minVal, currentMin);
        
        // Update the global maximum value
        maxVal = Math.max(maxVal, currentMax);
    }

    // Return the maximum distance found
    return maxDist;
}

console.log(maxDistance([[1, 2, 3], [4, 5], [1, 2, 3]]));
console.log(maxDistance([[1],[1]]))    