### **Notes on Problem 1: Merge Two Sorted List**

#### **Intuition**
The inorder traversal requires visiting nodes in the following sequence: left subtree, root node, and then right subtree. This traversal order suggests a natural recursive approach, where we apply the same logic at each node by first traversing its left subtree, then processing the current node's value, and finally traversing the right subtree.

#### **Approach**
1. **Recursive Traversal**: We define a helper function, `traverse`, that:
    - Checks if the current node is `null`. If so, it returns immediately (base case).
    - Recursively calls `traverse` on the left child of the current node to explore the left subtree.
    - Adds the current node’s value to the `result` array.
    - Recursively calls `traverse` on the right child of the current node to explore the right subtree.
    
2. **Initialize Traversal**: Start the traversal from the root of the tree. After the traversal completes, return the `result` array, which contains the values in the desired inorder sequence.

#### **Complexity**
- **Time complexity**: `O(n)`  
  Since each node is visited exactly once, where `n` is the total number of nodes in the binary tree.

- **Space complexity**: `O(n)`
  This includes the space for the `result` array to store node values and the space used by the call stack in recursive traversal, which in the worst case (for a skewed tree) may go up to `O(n)`.
