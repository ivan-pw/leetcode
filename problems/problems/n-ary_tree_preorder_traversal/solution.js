/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) return [];
    let arr = [root];
    let res = [];

    console.log(arr);
    while(arr.length) {
        const cur = arr.shift();
        res.push(cur.val);
        arr.unshift(...cur.children)
    }
    return res;
};