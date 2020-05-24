/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 时间复杂度： O(n^2)。
 * 数组中的每个元素都需要向左向右扫描。
 */
var trap1 = function(height) {
    let sum = 0;
    for (let i = 1; i < height.length-1; i++) {
        let max_left = 0, max_right = 0;
        // 1. 从当前元素向左扫描并更新
        for (let j = i; j >= 0; j--) {
            max_left = Math.max(max_left, height[j]);
        }
        // 2. 从当前元素向右扫描并更新
        for (let k = i; k < height.length; k++) {
            max_right = Math.max(max_right, height[k]);
        }
        // 3. 需要减去当前自己的高度
        sum += Math.min(max_left, max_right) - height[i];
    }
    return sum;
};

trap1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

/**
 * @param {number[]} height
 * @return {number}
 * 时间复杂度： O(n^2)。
 * 数组中的每个元素都需要向左向右扫描。
 */
var trap2 = function (height) {
    let ans = 0;
    let left_max_arr = [], right_max_arr = [];
    left_max_arr[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        left_max_arr[i] = Math.max(height[i], left_max_arr[i-1]);
    }
    right_max_arr[height.length-1] = height[height.length-1];
    for (let j = height.length - 2; j >= 0; j--) {
        right_max_arr[j] = Math.max(height[j], right_max_arr[j+1]);
    }
    for (let k = 1; k < height.length -1 ; k++) {
        ans += Math.min(left_max_arr[k], right_max_arr[k]) - height[k];
    }
    return ans;
}

/**
 * @param {number[]} height
 * @return {number}
 * 时间复杂度： O(n^2)。
 * 数组中的每个元素都需要向左向右扫描。
 * https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/
 */
var trap3 = function (height) {
    let ans = 0, current = 0;
    let stack = [];
    while (current < height.length) {
        while (stack.length > 0 && height[current] >= height[stack[stack.length - 1]]) {
            // 1. 弹出栈顶元素
            let top = stack.pop();
            if (stack.length == 0) {
                break;
            }
            // 2. 计算当前元素和栈顶元素的距离，准备进行填充操作
            let distance = current - stack[stack.length-1] - 1;
            let h = (Math.min(height[current], height[stack[stack.length-1]]) - height[top]);
            ans += distance * h;
        }
        stack.push(current++);
    }
    return ans;
}
/**
 * @param {number[]} height
 * @return {number}
 * 时间复杂度： O(n^2)。
 * 数组中的每个元素都需要向左向右扫描。
 * https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/
 */
var trap = function (height) {
    let sum =0 , current = 0;
    let stack = [];
    while(current < height.length) {
        while(stack.length > 0 && height[current] > height[stack[stack.length-1]]) {
            let top = stack.pop();
            if (stack.length  == 0) {
                break;
            }
            let distance = current - top;
            let h = Math.min(height[current], height[stack[stack.length-1]]) - height[top];
            sum += distance * h;
        }
        stack.push(current++);
    }
    return sum;
}
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
// @lc code=end

