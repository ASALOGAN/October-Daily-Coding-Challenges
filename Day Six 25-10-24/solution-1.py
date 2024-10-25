class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorder_traversal(root):
    result = []
    
    def traverse(node):
        if not node:
            return
        traverse(node.left)
        result.append(node.val)
        traverse(node.right)
    
    traverse(root)
    return result

def build_tree(array):
    if len(array) == 0:
        return None
    
    root = TreeNode(array[0])
    queue = [root]
    i = 1
    
    while i < len(array):
        current = queue.pop(0)
        
        if array[i] is not None:
            current.left = TreeNode(array[i])
            queue.append(current.left)
        i += 1
        
        if i < len(array) and array[i] is not None:
            current.right = TreeNode(array[i])
            queue.append(current.right)
        i += 1
    
    return root

# Testing the code
root = build_tree([1, None, 2, 3])
print(inorder_traversal(root))  # Should output [1, 3, 2]
