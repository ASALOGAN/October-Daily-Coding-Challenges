from collections import deque

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def levelOrder(root):
    # If the root is None, return an empty list as there are no nodes to traverse
    if not root:
        return []

    # Initialize a list to store the final result of level order traversal
    result = []
    # Initialize a deque (double-ended queue) with the root node to start the traversal
    queue = deque([root])

    # Continue the traversal until the queue is empty
    while queue:
        # Determine the number of nodes at the current level
        level_size = len(queue)
        # Initialize a list to store the values of nodes at the current level
        current_level = []

        # Iterate over all nodes at the current level
        for _ in range(level_size):
            # Remove the first node from the queue and process it
            current_node = queue.popleft()
            # Add the value of the current node to the current level list
            current_level.append(current_node.val)

            # If the current node has a left child, add it to the queue for the next level
            if current_node.left:
                queue.append(current_node.left)
            # If the current node has a right child, add it to the queue for the next level
            if current_node.right:
                queue.append(current_node.right)

        # Add the current level list to the result list
        result.append(current_level)

    # Return the result list containing level order traversal of the binary tree
    return result

# Example usage of the levelOrder function
example_tree = TreeNode(3)
example_tree.left = TreeNode(9)
example_tree.right = TreeNode(20, TreeNode(15), TreeNode(7))

# Print the level order traversal of the example tree
print(levelOrder(example_tree))  # Output: [[3], [9, 20], [15, 7]]
