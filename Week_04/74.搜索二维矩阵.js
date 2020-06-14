/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 1.需要处理 空的矩阵的边界情况 
    if (!matrix || matrix.length == 0) return false;
    var row = matrix.length;
    var left = 0;
    var right = row - 1;
    // 2. 判断target在矩阵的哪一行
    while (left < right) {
        var mid = Math.floor(left + (right - left) / 2);
        let value = matrix[mid][0];
        let len = matrix[mid].length;
        if (target >= value && target <= matrix[mid][len-1]) {
            left = mid;
            break;
        } else if (value > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    var leftCol = 0;
    var arr = matrix[left];
    var rightCol = arr.length - 1;
    // 3. 在矩阵的某一行进行二分查找，
    //    需要考虑某行只有一个元素的情况
    while (leftCol <= rightCol) {
        var mid = Math.floor(leftCol + (rightCol - leftCol) / 2);
        if (arr[mid] == target) {
            return true;
        } else if (arr[mid] < target) {
            leftCol = mid + 1;
        } else {
            rightCol = mid - 1;
        }
    }
    return false;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchMatrix;
// @after-stub-for-debug-end