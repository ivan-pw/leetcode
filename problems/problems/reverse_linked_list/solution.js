/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // if(!head) return null;
    // console.log(head);
    let curr = head;
    let prev = null
    let next = null
    while(curr !== null){
        // prev = curr;

        // prev = curr;
        // curr = prev.next;
        // if(curr) next = curr.next;

        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};