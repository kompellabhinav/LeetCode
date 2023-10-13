/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

/* 
Step 1: Find the midpoint of the Linked List
Step 2: Reverse the second half of the Linked list
Stem 3: Merge the lists
*/
var reorderList = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  // Step 1
  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // Step 2
  let prev = null;
  let current = slowPointer.next;
  while (current) {
    let tempNextNode = current.next;
    current.next = prev;
    prev = current;
    current = tempNextNode;
  }

  // Step 3
  l1 = head;
  l2 = prev;
  while (l1 || l2) {
    let temp1 = l1.next;
    let temp2 = l2.next;

    l1.next = l2;
    l2.next = temp1;
    l1 = temp1;
    l2 = temp2;
  }
};
