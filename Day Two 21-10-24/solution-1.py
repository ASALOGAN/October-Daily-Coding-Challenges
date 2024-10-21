from collections import deque

class MyStack:
    def __init__(self):
        self.queue1 = deque()
        self.queue2 = deque()

    def push(self, x):
        # Push element x onto stack
        self.queue2.append(x)
        # Transfer all elements from queue1 to queue2
        while self.queue1:
            self.queue2.append(self.queue1.popleft())
        # Swap the names of queue1 and queue2
        self.queue1, self.queue2 = self.queue2, self.queue1

    def pop(self):
        # Removes the element on top of the stack and returns it
        return self.queue1.popleft()

    def top(self):
        # Get the top element
        return self.queue1[0]

    def empty(self):
        # Returns whether the stack is empty
        return not self.queue1
