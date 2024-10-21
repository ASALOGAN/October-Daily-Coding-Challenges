### **Notes on Problem 1: Implementing Stack using Queues** 

## Intuition
The problem requires implementing a stack using two queues. A stack follows the Last-In-First-Out (LIFO) principle, whereas a queue follows the First-In-First-Out (FIFO) principle. The challenge is to simulate the LIFO behavior of a stack using the FIFO operations of queues.

## Approach
To implement the stack using two queues, we can use one queue (`queue1`) to store the elements in the order they should appear in the stack. The second queue (`queue2`) is used as temporary storage to help reorder elements when a new element is pushed onto the stack. The steps are as follows:

1. **Push Operation**: 
   - Add the new element to `queue2`.
   - Transfer all elements from `queue1` to `queue2` to maintain the order.
   - Swap the roles of `queue1` and `queue2`.
   
2. **Pop Operation**: 
   - Simply remove the front element from `queue1`.
   
3. **Top Operation**: 
   - Return the front element of `queue1`.
   
4. **Empty Operation**: 
   - Check if `queue1` is empty.

## Complexity
- **Time complexity**:
  - **Push**: \(O(n)\), where \(n\) is the number of elements in the stack, because we transfer all elements from `queue1` to `queue2`.
  - **Pop**: \(O(1)\), as it involves removing the front element of `queue1`.
  - **Top**: \(O(1)\), as it involves accessing the front element of `queue1`.
  - **Empty**: \(O(1)\), as it involves checking the length of `queue1`.

- **Space complexity**:
  - \(O(n)\), where \(n\) is the number of elements in the stack, since we use two queues to store the elements.
