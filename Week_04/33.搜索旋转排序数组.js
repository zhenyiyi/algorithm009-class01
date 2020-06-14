/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || nums.length == 0) return -1;
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        // 左边是升序的
        if (nums[left] < nums[mid] && (target > nums[mid] || target < nums[left])) {
            left = mid + 1;
        } // 左边不是升序的 
        else if (target > nums[mid] && target < nums[left]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left == right && nums[right] == target ? right : - 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end