/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null || head.nex ===null) {
        return null;
    }

    let set = new Set();
    while(head) {
        if(set.has(head)) return head;
        set.add(head)
        head = head.next
    }

    return null;
};