/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * https://leetcode-cn.com/problems/combinations/solution/javascript-hui-su-suan-fa-ji-bai-liao-100de-yong-h/
 */
var combine = function (n, k) {
    let output = [];
    function dfs(start, arr) {
        if (arr.length == k) {
            output.push(arr.slice(0));
            return;
        }
        for (let i = start; i <= n; i++) {
            arr.push(i);
            dfs(i + 1, arr);
            arr.pop();
        }
    }
    dfs(1, []);
    return output;
};