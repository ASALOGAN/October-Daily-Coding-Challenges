class ListNode:
    def __init__(self, val = 0, next = None):
        # Initialize a node with a value and a pointer to the next node
        self.val = val
        self.next = next

class Solution:
    def reverseList(self, head):
        # Initialize the previous node as None
        prev = None
        # Start with the head of the list
        current = head
        
        # Iterate through the list until the end
        while current is not None:
            # Store the next node
            next = current.next
            # Reverse the current node's pointer
            current.next = prev
            # Move the previous node to the current node
            prev = current
            # Move to the next node in the list
            current = next
        
        # Return the new head of the reversed list
        return prev