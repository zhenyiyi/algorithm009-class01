/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (!nums || nums.length == 0) return 0;
    var left = 0;
    var right = nums.length - 1;
    let min = nums[0];
    while (left <= right) {
        let mid = Math.floor((left + (right - left) / 2));
        if (nums[left] <= nums[mid]) {
            // 左边是升序的
            min = Math.min(min, nums[left]);
            left = mid + 1;
        } else {
            // 右边是升序的
            min = Math.min(min, nums[mid]);
            right = mid;
        }
    }
    return min;
};