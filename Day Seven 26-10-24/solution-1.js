/*
Problem: Reverse a Singly Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Constraints:
- The number of nodes in the list is in the range [0, 5000].
- -5000 <= Node.val <= 5000
*/

// Define a ListNode class to create nodes of a singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val; // Value of the current node
        this.next = next; // Pointer to the next node in the list
    }
}

// Function to reverse a singly linked list
const reverseList = (head) => {
    let prev = null; // Initialize previous node as null
    let current = head; // Start with the head of the list

    // Iterate through the list
    while (current !== null) {
        let nextNode = current.next; // Store the next node
        current.next = prev; // Reverse the current node's pointer
        prev = current; // Move the previous node to the current node
        current = nextNode; // Move to the next node in the list
    }

    // Return the new head of the reversed list
    return prev;
};

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log('Linked List:', linkedListToArray(head));

// Reverse the linked list
let reversedHead = reverseList(head);
console.log('Reversed Linked List:', linkedListToArray(reversedHead));

// Function to convert linked list to array for easy display
const linkedListToArray = (head) => {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
};

// Display the reversed linked list as an array
console.log(linkedListToArray(reversedHead)); // Should output [5, 4, 3, 2, 1]
