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
 * @return {boolean}
 */

var isValidBST = function(root) {
    let prev = null;

    const check=(cur)=>{
        if(!cur) return true;
        if(!check(cur.left)) return false;
        if(prev && cur.val <= prev.val) return false;
        prev = cur;
        return check(cur.right)
    }

    return check(root);
};

// want make sth faster
// var isValidBST = function(root, min = -Infinity, max = Infinity) {
//     if(root === null) return true;
//     // console.log('root.val: ', root.val);
//     // console.log('min: ', min);
//     // console.log('max: ', max);
//     let res = true;
//     if(root.val <= min || root.val >= max) return false;

//     res = isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);

//     return res;
// };
