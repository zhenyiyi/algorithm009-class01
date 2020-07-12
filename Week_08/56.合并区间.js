/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((arr1, arr2) => {
        return arr1[0] - arr2[0];
    });
    var result = [];
    for (let i = 0; i < intervals.length; i++) {
        let arr = intervals[i];
        if (result.length == 0 || result[result.length - 1][1] < arr[0]) {
            result.push(arr);
        } else {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], arr[1]);
        }
    }
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = merge;
// @after-stub-for-debug-end