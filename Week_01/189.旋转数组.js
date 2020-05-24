/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function(nums, k) {
    k = k % nums.length;
    while (k > 0) {
        let pre = nums[nums.length-1];
        for (let i = 0; i < nums.length; i++) {
            let temp = nums[i];
            nums[i] = pre;
            pre = temp;
        }
        k--;
    }
    return nums;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);
    return nums;
}

/**
 * 
 * @param {number[]} nums 
 * @param {number} start 
 * @param {number} end 
 */
var reverse = function(nums, start, end) {
    while (start < end) {
        let temp = nums[end];
        nums[end] = nums[start];
        nums[start] = temp;
        start++;
        end--;
    }
}

// let ret = rotate([-1, -100, 3, 99], 2);
ret = rotate([1, 2, 3, 4, 5, 6, 7], 3);
// @lc code=end

