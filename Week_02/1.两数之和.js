/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let output = [];
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let other = target - nums[i];
        if (map.has(other)) {
            return [map.get(other), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return [];
};