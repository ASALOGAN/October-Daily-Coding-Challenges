/*
Problem: Merge Two Sorted List
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

// Define the ListNode class
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

const mergeTwoLists = (list1, list2) => {
  // Create a dummy node to act as the start of the merged list
  let dummy = new ListNode(-1);
  // This will be the current node in the new list
  let current = dummy;

  // While both lists have nodes to compare
  while (list1 !== null && list2 !== null) {
    // Compare the values of the current nodes of both lists
    if (list1.val <= list2.val) {
      // If list1's node is smaller or equal, attach it to the current node
      current.next = list1;
      // Move list1 to the next node
      list1 = list1.next;
    } else {
      // If list2's node is smaller, attach it to the current node
      current.next = list2;
      // Move list2 to the next node
      list2 = list2.next;
    }
    // Move the current node to the next in the merged list
    current = current.next;
  }

  // If one of the lists is not empty, attach the remaining elements
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Return the merged list, which starts at dummy.next
  return dummy.next;
};

// Example usage of mergeTwoLists function

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(-1);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Create two linked lists from arrays
let list1 = createLinkedList([1, 2, 4]);
let list2 = createLinkedList([1, 3, 4]);

// Merge the two lists
let mergedList = mergeTwoLists(list1, list2);

// Print the merged list
printLinkedList(mergedList);
