/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2, rem) {
    if(!l1 && !l2 && !rem) return null;

    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (rem || 0);
    rem = Math.floor(sum / 10);

    return new ListNode(sum % 10, addTwoNumbers(l1?.next, l2?.next, rem));
};
