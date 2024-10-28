class Solution:
    def getIntersectionNode(self, headA, headB):
        """
        This function finds the intersection node of two singly linked lists.
        
        Args:
        headA: The head of the first linked list.
        headB: The head of the second linked list.
        
        Returns:
        The node at which the two linked lists intersect, or None if there is no intersection.
        """
        # Initialize two pointers for both linked lists
        pointerA = headA  # Start pointerA at the head of the first list
        pointerB = headB  # Start pointerB at the head of the second list
        
        # Traverse both lists until the pointers meet or both become None
        while pointerA != pointerB:
            # Move pointerA to the next node, or switch to headB if it reaches the end
            pointerA = pointerA.next if pointerA else headB
            # Move pointerB to the next node, or switch to headA if it reaches the end
            pointerB = pointerB.next if pointerB else headA
        
        # Return the intersection node, or None if no intersection exists
        return pointerA 