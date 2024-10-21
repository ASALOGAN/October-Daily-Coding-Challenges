// 1. Implement Stack using Queues:
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).
// Implement the MyStack class:
//
// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:
//
// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
//
// Constraints:
//
// 1 <= x <= 9
// At most 100 calls will be made to push, pop, top, and empty.
// All the calls to pop and top are valid.


class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        // Push element x onto queue2
        this.queue2.push(x);
        // Push all elements from queue1 to queue2
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }
        // Swap the names of queue1 and queue2
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop() {
        // Remove the element from the front of queue1
        return this.queue1.shift();
    }

    top() {
        // Get the front element of queue1
        return this.queue1[0];
    }

    empty() {
        // Check if queue1 is empty
        return this.queue1.length === 0;
    }
}

// Example usage
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top());    // return 2
console.log(myStack.pop());    // return 2
console.log(myStack.empty());  // return false