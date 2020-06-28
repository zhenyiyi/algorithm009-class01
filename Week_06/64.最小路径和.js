/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    if (m == 0) return [];
    let n = grid[0].length;
    let dp = grid;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i == m - 1 && j == n - 1) continue;
            if (i < m - 1 && j < n - 1) {
                dp[i][j] += Math.min(dp[i][j + 1], dp[i + 1][j]);
            } else if (i == m - 1) {
                dp[i][j] += dp[i][j+1];
            } else if (j == n-1) {
                dp[i][j] += dp[i+1][j];
            }
        }
    }
    return dp[0][0];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minPathSum;
// @after-stub-for-debug-end