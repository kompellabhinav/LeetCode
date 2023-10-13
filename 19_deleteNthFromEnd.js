/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head;
    let fast = head;

    // Create gap between slow and fast such that gap is equal to n - 1 between them.
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    if (!fast) return head.next;
    // Move the fast pointer to the end.
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
};
