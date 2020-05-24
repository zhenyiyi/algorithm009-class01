/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    let pre = 0;
    for (let i = 1; i < nums.length; i++) {
        // 数组完成排序后，我们可以放置两个指针 ii 和 jj，其中 ii 是慢指针，而 jj 是快指针。
        // 只要 nums[i] = nums[j]nums[i] = nums[j]，我们就增加 jj 以跳过重复项。
        if (nums[i] != nums[pre]) {
            pre++;
            nums[pre] = nums[i];
        }
    }
    return pre + 1;
};
removeDuplicates([1, 1, 2]);

