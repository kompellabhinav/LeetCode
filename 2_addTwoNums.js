/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/

var addTwoNumbers = function (l1, l2) {
    var List = new ListNode();
    var carry = 0;
    var sum = 0;
    head = List;

    // While any of l1 or l2 or carry exits this will run
    while (l1 || l2 || carry) {
        var val1 = 0;
        var val2 = 0;

        if (l1) {
            // If l1 exists
            val1 = l1.val; // This entire if statement can be written as following:
            l1 = l1.next; // (l1?.val || 0)       If l1 exists, get the value or assign 0 to l1.
        }

        if (l2) {
            // If l2 exists
            val2 = l2.val;
            l2 = l2.next;
        }

        sum = val1 + val2 + carry; // Adding values with carry which is

        carry = sum > 9 ? 1 : 0;
        let digit = sum % 10;
        var currentNode = new ListNode(digit);
        List.next = currentNode;
        List = currentNode;
    }
    return head.next;

    /*
                METHOD 2

                var List = new ListNode();
                var carry = 0;
                var sum = 0;
                head = List;

                while (l1 || l2 || carry) {
                    var val1 = 0;
                    var val2 = 0;

                    sum = (l1?.val||0) + (l2?.val||0) + carry;

                    carry = (sum > 9) ? 1 : 0;
                    let digit = sum % 10;
                    var currentNode = new ListNode(digit);
                    List.next = currentNode;
                    List = currentNode;

                    l1 = l1?.next;
                    l2 = l2?.next;        
                }
                return head.next;
                */
};
