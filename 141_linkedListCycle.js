/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// We use two pointer where one pointer moves faster then another. If the faster pointer goes through the circle and catches up with the
// slow pointer, we return true. If the fast pointer reached the end, we return false.

var hasCycle = function (head) {
    let fast = head;

    while (fast) {
        head = head.next;
        fast = fast.next.next;

        if (head === fast) {
            return true;
        }
    }
    return false;
};

// I used this method initialy. In the method I add each value into a hashet and if there is a cycle, same value would be added again.
// If the length of the hashset is not equal to the length of the LinkedList, then it has a cycle and hence returns true.
// If we reach the end of the list, we return false.
// Problem with this is, it does not work if the array has duplicates. Therefore, I used the approach above.

/*
let lengthLL = 0;
    var set = new Set();
    while (head) {
        set.add(head.val);
        lengthLL++;
        head = head.next;
        if (lengthLL !== set.size()) {
            return false;
        }
    }
    return true;
*/
