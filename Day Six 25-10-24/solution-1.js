/*
Problem: Binary Tree Inorder Traversal
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Explanation:

Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]
Explanation:

Example 3:
Input: root = []
Output: []

Example 4:
Input: root = [1]
Output: [1]

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
*/

// Define a TreeNode class to create nodes of a binary tree
class TreeNode {
    constructor(val, left = null, right = null) {
        // Value of the current node
        this.val = val;
        // Left child of the current node
        this.left = left;
        // Right child of the current node
        this.right = right;
    }
}

// Function to perform inorder traversal on a binary tree
const inorderTraversal = (root) => {
    // Array to store the inorder traversal result
    const result = [];
    
    // Helper function to recursively traverse the tree
    const traverse = (node) => {
        // Base case: if the node is null, return
        if (!node) return;
        // Recursively traverse the left subtree
        traverse(node.left);
        // Add the current node's value to the result array
        result.push(node.val);
        // Recursively traverse the right subtree
        traverse(node.right);
    };
    
    // Start the traversal from the root
    traverse(root);
    // Return the result array containing the inorder traversal
    return result;
};

// Function to build a binary tree from an array using level order insertion
const buildTree = (array) => {
    // If the array is empty, return null (no tree to build)
    if (array.length === 0) return null;
    
    // Create the root node with the first element of the array
    const root = new TreeNode(array[0]);
    // Queue to manage nodes while building the tree
    const queue = [root];
    // Index to track the current position in the array
    let i = 1;
    
    // Loop through the array to build the tree
    while (i < array.length) {
        // Get the current node from the queue
        const current = queue.shift();
        
        // If the current array element is not null, create the left child
        if (array[i] !== null) {
            current.left = new TreeNode(array[i]);
            // Add the left child to the queue for further processing
            queue.push(current.left);
        }
        i++;
        
        // If there are more elements and the current array element is not null, create the right child
        if (i < array.length && array[i] !== null) {
            current.right = new TreeNode(array[i]);
            // Add the right child to the queue for further processing
            queue.push(current.right);
        }
        i++;
    }
    
    // Return the root of the constructed binary tree
    return root;
};

// Testing the code
const root = buildTree([1, null, 2, 3]);
console.log(JSON.stringify(root, null, 2)); // To verify the tree structure
console.log(inorderTraversal(root)); // Should output [1, 3, 2]
