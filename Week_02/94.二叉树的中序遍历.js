/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let output = [];
    function helper(node) {
        if (node) {
            helper(node.left);
            output.push(node.val);
            helper(node.right);
        }
    }
    helper(root);
    return output;
};