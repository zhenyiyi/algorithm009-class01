/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let output = [];
    if (!root) return output;
    let queue = [root];
    let depth = 0;
    while (queue.length > 0) {
        output.push([]);
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            output[depth].push(node.val);
            queue.push(...node.children);
        }
        depth++;
    }
    return output;
};