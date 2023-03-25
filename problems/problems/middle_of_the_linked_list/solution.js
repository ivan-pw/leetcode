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
var middleNode = function(head) {
    // console.log(head);
    let l1 = head;
    let i = 0;
    let arr = [];
    while(l1) {
        arr.push(l1);
        l1 = l1.next;
        i++;
    }
    // console.log(arr[Math.floor(i/2)]);

    return arr[Math.floor(i/2)];
};