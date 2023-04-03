/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let ans = null;

    const merge = (list1, list2) => {
        if(list1 == null) return list2;
        if(list2 == null) return list1;

        if(list1.val < list2.val){
            list1.next = merge(list1.next, list2);
            return list1;
        } else {
            list2.next = merge(list2.next, list1);
            return list2;
        }
    }

    for(let i = 0; i < lists.length; i++){
        ans = merge(ans, lists[i]);
    }

    return ans;
};