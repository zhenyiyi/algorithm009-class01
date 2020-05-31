/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 暴力求解法
 */
var maxSlidingWindow1 = function (nums, k) {
    let results = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        let max = nums[i];
        for (let j = i+1; j < i+k; j++) {
            max = nums[j] > max ? nums[j] : max;
        }
        results.push(max);
    }
    return results;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 
 */
var maxSlidingWindow = function (nums, k) {
    let results = [];
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        
        while (stack.length > 0 && stack[0] + k === i ) {
            stack.shift();
        }

        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);
        if (i >= k-1) {
            results.push(nums[stack[0]]);
        }
    }
    return results;
};

let r = maxSlidingWindow([1, 3, 1, 2, 0, 5], 3);
console.log(r);
r = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log(r);