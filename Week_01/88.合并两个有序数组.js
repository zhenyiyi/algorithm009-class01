/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *  1. 合并后排序
 */
var merge1 = function(nums1, m, nums2, n) {
    let i = 0, j = 0;
    nums1.splice(m);
    for (let i = 0; i < nums2.length; i++) {
        nums1.push(nums2[i]);
    }
    nums1 = nums1.sort(function(a, b){
        if (a == b) {
            return 0;
        } else if (a < b) {
            return -1;
        } else {
            return 1;
        }
    });
    return nums1;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 时间复杂度 O(m+n);
 * 空间复杂度 O(m);
 */
var merge2 = function (nums1, m, nums2, n) {
    let p1 =0 ,p2 = 0, p = 0;
    let nums1_copy = nums1.slice(0, m);
    while (p1 < m && p2 < n) {
        nums1[p++] = nums1_copy[p1] < nums2[p2] ? nums1_copy[p1++] : nums2[p2++];
    }
    if (p1 < m) {
        for (let i = p; i < m + n ; i++) {
            nums1[p++] = nums1_copy[p1++];
        }
    } 
    if (p2 < n) {
        for (let i = p; i < m + n; i++) {
            nums1[p++] = nums2[p2++];
        } 
    }
    return nums1;
}
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 时间复杂度 O(m+n);
 * 空间复杂度 O(m);
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m-1, p2 = n-1, p = m+n-1;
    while (p1 >= 0 && p2 >= 0) {
        nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
    }
    if (p2 >= 0) {
        for (let i = p2; i >= 0 ; i--) {
            nums1[p--] = nums2[i];
        }
    }
    return nums1;
}
// let ret = merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3);

ret = merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

// @lc code=end

