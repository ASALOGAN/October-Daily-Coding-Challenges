### **Notes on Problem 1: Reverse Linked List**

#### **Intuition**
The problem requires reversing a singly linked list. The intuitive approach is to iterate through the list and reverse the direction of the pointers. This involves changing the `next` pointer of each node to point to its previous node, effectively reversing the list.

#### **Approach**
1. Initialize a variable `prev` to `null`. This will eventually become the new head of the reversed list.
2. Use a variable `current` to traverse the list, starting from the head.
3. Iterate through the list:
   - Store the next node in a temporary variable `next`.
   - Reverse the `next` pointer of the `current` node to point to `prev`.
   - Move `prev` to the `current` node.
   - Move `current` to the `next` node.
4. Once the loop completes, `prev` will be the new head of the reversed list.
5. Return `prev`.

#### **Complexity**

- **Time complexity:**  
  The time complexity is $$O(n)$$, where `n` is the number of nodes in the linked list. This is because we iterate through the list once.

- **Space complexity:**  
  The space complexity is $$O(1)$$, as we are using a constant amount of extra space for the `prev`, `current`, and `next` pointers.
