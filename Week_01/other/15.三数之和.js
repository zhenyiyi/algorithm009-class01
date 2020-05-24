/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];
    if (nums.length < 3) {
        return results;
    }
    nums = nums.sort((a,b)=>a-b);
    let target = 0;
    for (let i = 0; i < nums.length-2; i++) {
        if (nums[i] > target) {
            return results;
        }
        if (i > 0 && nums[i] == nums[i-1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left+1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right-1]) {
                    right--;
                }
                left++;
                right--;
            } else if (nums[i] + nums[left] + nums[right] > target){
                right--;
            } else {
                left++;
            }
        }
    }
    return results;
};

/**
 * 
 * @param {number} nums 
 */
var sortArr = function (nums) {
    nums.sort(function (a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    return nums;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// @lc code=end

