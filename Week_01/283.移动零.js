/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 非 0 的索引
    let lastNonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            nums[lastNonZeroIndex] = nums[i];
            nums[i] = 0;
            lastNonZeroIndex++;
        }
    }
};

/**
 * 
 * @param {number[]} nums 
 * @param {int} index1 
 * @param {int} index2 
 */
var swap = function(nums, index1, index2) {
    if (index1 != index2) {
        let val1 = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = val1;
    } 
}

console.log(moveZeroes([0, 1, 0, 3, 12]));