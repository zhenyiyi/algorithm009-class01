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
var largestValues = function (root) {
    if (!root) return [];
    var queue = [root];
    let output = [];
    while (queue.length > 0) {
        let len = queue.length;
        let max = -Infinity;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            max = Math.max(node.val, max);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        output.push(max);
    }
    return output;
};