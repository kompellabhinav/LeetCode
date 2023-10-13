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
        let nextNode = current.next; // Make the node after current into nextNode.
        current.next = prev; // Point the current node to the previous node.
        prev = current; // Make the previous node into current node.
        current = nextNode;
    }

    // This line makes the slow pointer point to null. Doinf this will seperate the linkedlists.
    slowPointer.next = null;

    // Step 3
    l1 = head;
    l2 = prev;
    while (l2) {
        let temp = l1.next;
        l1.next = l2;
        l1 = l2;
        l2 = temp;
    }
};
