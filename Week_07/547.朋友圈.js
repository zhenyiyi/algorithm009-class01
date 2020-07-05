/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if (M.length == 0) return 0;
    var visited = new Array(M.length).fill(0);
    var queue = [];
    var res = 0;
    for (let i = 0; i < M.length; i++) {
        if (visited[i] == 0) {
            queue.push(i);
            while (queue.length > 0) {
                let index = queue.shift();
                visited[index] = 1;
                for (let j = 0; j < M.length; j++) {
                    if (M[i][j] == 1 && visited[j] == 0) {
                        queue.push(j);
                    }
                }
            }
            res++;
        }
    }
    return res;
};
// @lc code=end

