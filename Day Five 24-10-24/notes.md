### **Notes on Problem 1: Merge Two Sorted List**

#### **Intuition**
When merging two sorted linked lists, the initial thought is to use a simple comparison at each step, taking advantage of the fact that both lists are already sorted. By comparing the smallest elements from each list and appending the smaller one to the new list, we can build the merged list in sorted order. This process continues until all nodes are merged.

#### **Approach**
1. Create a dummy node that acts as the starting point of the merged list. This helps simplify the list-building process.
2. Use a pointer (`current`) that starts at the dummy node to keep track of the last node in the merged list.
3. While both `list1` and `list2` have nodes to compare:
   - Compare the values of the current nodes in both lists.
   - Attach the node with the smaller value to `current.next` and move the corresponding list’s pointer to the next node.
4. After one list is exhausted, append the remaining nodes from the other list to the merged list.
5. Return the merged list starting from `dummy.next` (since `dummy` itself is a placeholder).

#### **Complexity**
- **Time complexity**:
  - `O(n + m)`, where `n` is the length of `list1` and `m` is the length of `list2`. We traverse each list once, comparing and merging nodes.

- **Space complexity**:
  - `O(1)`. We use a constant amount of extra space for the dummy node and pointers, so space usage is minimal aside from the input lists.

