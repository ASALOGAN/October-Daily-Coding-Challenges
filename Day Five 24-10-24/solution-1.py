# Define the ListNode class
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    # Create a dummy node to act as the start of the merged list
    dummy = ListNode(-1)
    # This will be the current node in the new list
    current = dummy

    # While both lists have nodes to compare
    while list1 is not None and list2 is not None:
        # Compare the values of the current nodes of both lists
        if list1.val <= list2.val:
            # If list1's node is smaller or equal, attach it to the current node
            current.next = list1
            # Move list1 to the next node
            list1 = list1.next
        else:
            # If list2's node is smaller, attach it to the current node
            current.next = list2
            # Move list2 to the next node
            list2 = list2.next
        # Move the current node to the next in the merged list
        current = current.next

    # If one of the lists is not empty, attach the remaining elements
    if list1 is not None:
        current.next = list1
    else:
        current.next = list2

    # Return the merged list, which starts at dummy.next
    return dummy.next

# Example usage of mergeTwoLists function

# Helper function to create a linked list from an array
def createLinkedList(arr):
    dummy = ListNode(-1)
    current = dummy
    for val in arr:
        current.next = ListNode(val)
        current = current.next
    return dummy.next

# Helper function to print a linked list
def printLinkedList(head):
    current = head
    result = []
    while current is not None:
        result.append(current.val)
        current = current.next
    print(" -> ".join(map(str, result)))

# Create two linked lists from arrays
list1 = createLinkedList([1, 2, 4])
list2 = createLinkedList([1, 3, 4])

# Merge the two lists
mergedList = mergeTwoLists(list1, list2)

# Print the merged list
printLinkedList(mergedList)
