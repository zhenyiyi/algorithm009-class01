/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo1 = function(n) {
    if (n == 0) {
        return false
    }
    while (n % 2 === 0 ) {
        n = n / 2
    }
    return n == 1
};

var isPowerOfTwo = function(n) {
    let ret = false
    if (n > 0) {
        ret = (n & (n - 1)) == 0;
    } 
    return ret;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isPowerOfTwo;
// @after-stub-for-debug-end