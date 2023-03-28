/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return true;
    // console.log('p: ', p);
    // console.log('q: ', q);
    if(Math.max(p.val, q.val) < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } 
    if(Math.min(p.val, q.val) > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    return root;
};