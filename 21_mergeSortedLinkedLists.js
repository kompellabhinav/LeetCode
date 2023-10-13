/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // If list1 is empty return the remaining list2.
    if (!list1) return list2;
    // If list2 is empty return the remaining list1.
    if (!list2) return list1;

    // Compare list1 and list2 values.
    if (list1.val < list2.val) {
        // If list1 has the smaller value, point that smaller value to the remiaining list1 and list2.
        // Return list1 in the end.
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        // Else do it vice versa with list2 as the first argument of the recursive call.
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
