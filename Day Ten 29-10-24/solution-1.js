// Problem:Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

// Function to perform level order traversal on a binary tree
const levelOrder = (root) => {
  // If the root is null, return an empty array as there are no nodes to traverse
  if (!root) return [];

  // Initialize an array to store the final result of level order traversal
  const result = [];
  // Initialize a queue with the root node to start the traversal
  const queue = [root];

  // Continue the traversal until there are no more nodes in the queue
  while (queue.length > 0) {
    // Determine the number of nodes at the current level
    const LevelSize = queue.length;
    // Initialize an array to store the values of nodes at the current level
    const currentLevel = [];
    // Iterate over all nodes at the current level
    for (let i = 0; i < LevelSize; i++) {
      // Remove the first node from the queue and process it
      const currentNode = queue.shift();
      // Add the value of the current node to the current level array
      currentLevel.push(currentNode.val);

      // If the current node has a left child, add it to the queue for the next level
      if (currentNode.left) queue.push(currentNode.left);
      // If the current node has a right child, add it to the queue for the next level
      if (currentNode.right) queue.push(currentNode.right);
    }

    // Add the current level array to the result array
    result.push(currentLevel);
  }

  // Return the result array containing level order traversal of the binary tree
  return result;
};

// Example usage of the levelOrder function
const exampleTree = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

// Print the level order traversal of the example tree
console.log(levelOrder(exampleTree)); // Output: [[3], [9, 20], [15, 7]]

