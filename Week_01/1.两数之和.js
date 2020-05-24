/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        }
        let other = target - nums[i];
        map.set(other, i);
    }
};

var twoSum2 = function (nums, target) {
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum2([3, 2, 4], 6));



