### **Notes on Problem 1:  Binary Tree Level Order Traversal**

# Intuition
The problem requires traversing a binary tree level by level, which suggests using a breadth-first search (BFS) approach. BFS is well-suited for this task because it explores all nodes at the present depth level before moving on to nodes at the next depth level.

# Approach
We can use a queue to facilitate the BFS traversal. Start by adding the root node to the queue. Then, while the queue is not empty, process each node at the current level by dequeuing it, recording its value, and enqueuing its children. This ensures that nodes are processed level by level. The values of nodes at each level are collected into a list, which is then added to the final result list.

# Complexity
- Time complexity:
The time complexity is $$O(n)$$, where $$n$$ is the number of nodes in the binary tree. This is because each node is processed exactly once.

- Space complexity:
The space complexity is $$O(n)$$, which is the maximum number of nodes that can be stored in the queue at any time. In the worst case, this occurs when the tree is completely unbalanced, e.g., all nodes are on one side.

