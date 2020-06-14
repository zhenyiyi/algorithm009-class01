/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (!nums) return false;
    let visited = [];
    visited[nums.length - 1] = false;
    visited[0] = true;
    for (let i = 0; i < nums.length - 1 && visited[i] === true ; i++) {
        for (let j = i; j <= nums[i] + i ; j++) {
            visited[j] = true;
        }
    }
    return visited[nums.length - 1];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = canJump;
// @after-stub-for-debug-end