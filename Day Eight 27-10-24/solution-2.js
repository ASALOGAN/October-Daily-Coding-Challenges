// Intersection of Two Linked Lists
// 
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
// If the two linked lists have no intersection at all, return null.
// 
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// 
// Note that the linked lists must retain their original structure after the function returns.
// 
// Custom Judge:
// 
// The inputs to the judge are given as follows (your program is not given these inputs):
// 
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. 
// If you correctly return the intersected node, then your solution will be accepted.

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let pointerA = headA;
  let pointerB = headB;

  // Traverse both lists until the pointers meet or both become null
  while (pointerA !== pointerB) {
    // Move to the next node or switch to the other list's head
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  // Return the intersection node or null if no intersection
  return pointerA;
};
