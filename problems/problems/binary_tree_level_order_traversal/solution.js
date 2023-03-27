/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root, acc = [], l = 0) => {
  if(!root) return acc;
  if(!acc[l]) acc[l] = [];
  acc[l].push(root.val);
  levelOrder(root.left, acc, l+1);
  levelOrder(root.right, acc, l+1);
  return acc;
};