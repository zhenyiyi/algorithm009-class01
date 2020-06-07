/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let output = [];
    let used = new Set();
    let index = 0;
    function backtrace(arr, used) {
        if (arr.length === nums.length) {
            output.push(arr.slice(0));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i) || (i > 0 && nums[i] == nums[i - 1])) {
                continue;
            }
            arr.push(nums[i]);
            used.add(i);
            backtrace(arr, used);
            used.delete(i);
            arr.pop();
        }
    }
    backtrace([], used);
    return output;
};