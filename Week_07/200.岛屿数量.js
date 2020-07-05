/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let rows = grid.length;
    if (rows == 0) return 0;
    let cols = grid[0].length;
    if (cols == 0) return 0;
    function dfs(i, j) {
        grid[i][j] = 0;
        if (i > 0 && grid[i - 1][j] == 1) dfs(i - 1, j);
        if (j > 0 && grid[i][j - 1] == 1) dfs(i, j - 1);
        if (i + 1 < rows && grid[i + 1][j] == 1) dfs(i + 1, j);
        if (j + 1 < cols && grid[i][j + 1] == 1) dfs(i, j + 1);
    }
    var res = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                res++;
                dfs(i, j);
            }
        }
    }
    return res;
};
// @lc code=end

