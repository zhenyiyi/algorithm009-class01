/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder2 = function(root) {
    let output = [];
    if (root === null) {
        return output;
    }
    let queue = [root];
    while (queue.length > 0) {
        let tempArr = [];
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            tempArr.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        output.push(tempArr);
    }
    return output;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    let output = [];
    dfs(0, root);
    /**
     * 
     * @param {number} level 
     * @param {TreeNode} node 
     */
    function dfs(level, node) {
        if (!node) {
            return ;
        }
        if (output.length < level + 1) {
            output.push([]);
        }
        output[level].push(node.val);
        dfs(level+1, node.left);
        dfs(level+1, node.right);
    }
    return output;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end