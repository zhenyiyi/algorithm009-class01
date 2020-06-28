/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var maxSide = 0;
    if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
        return maxSide;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    var dp = [];
    for (let i = 0; i <= rows; i++) {
        dp.push(new Array(cols + 1).fill(0));
    }
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i - 1][j - 1] == 1) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    return maxSide * maxSide;
};
// @lc code=end

