/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length-1; i++) {
        for (let j = i+1; j < height.length; j++) {
            let area = Math.min(height[i], height[j]) * (j - i);
            max = Math.max(max, area);
        }
    }
    return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function (height) {
    let max = 0;
    for (let i = 0, j = height.length-1; i < j; ) {
        let min = height[i] < height[j] ? height[i++] : height[j--];
        let area = (j - i + 1) * min;
        max = Math.max(area, max);
    }
    return max;
}