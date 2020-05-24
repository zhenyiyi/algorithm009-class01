/**
 * @param {number[]} heights
 * @return {number} 
 * 超出时间限制
 */
var largestRectangleArea = function (heights) {
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        for (let j = i; j < heights.length; j++) {
            let min = Infinity;
            for (let k = i; k <= j; k++) {
                min = Math.min(min, heights[k]);
            }
            max = Math.max(max, min * (j - i + 1));
        }
    }
    return max;
};

let ret = largestRectangleArea([2]);
console.log(ret);

/**
 * @param {number[]} heights
 * @return {number} 
 * 超出时间限制
 */
var largestRectangleArea2 = function (heights) {
    let max = 0;
    for (let i = 0; i < heights.length; i++) {
        let min = Infinity;
        for (let j = i; j < heights.length; j++) {
            min = Math.min(min, heights[j]);
            max = Math.max(max, min * (j-i+1));
        }
    }
    return max;
};

/**
 * @param {number[]} heights
 * @return {number} 
 * 超出时间限制
 */
var largestRectangleArea3 = function (heights) {
    let max = 0;
    let stack = [];
    stack.push(-1);
    for (let i = 0; i < heights.length; i++) {
        // 栈顶元素不是-1
        // 栈顶元素大于新加入的元素，需要出栈
        while (stack[stack.length-1] != -1 && heights[stack[stack.length-1]] >= heights[i]) {
            let area = heights[stack.pop()] * (i - stack[stack.length-1] - 1);
            max = Math.max(max, area);
        }
        stack.push(i);
    }
    while(stack[stack.length-1] != -1) {
        let area = heights[stack.pop()] * (heights.length - stack[stack.length-1] -1);
        max = Math.max(area, max);
    }
    return max;
}

console.log(largestRectangleArea3([2, 1, 5, 6, 2, 3]));