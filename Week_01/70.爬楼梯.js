/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let arr = Array(n + 1);
    var _climbStairs = function (num) {
        if (num <= 2) {
            return num;
        }
        if (arr[num]) {
            return arr[num];
        }
        arr[num] = _climbStairs(num-1) + _climbStairs(num-2);
        return arr[num];
    }
    return _climbStairs(n);
};

let r = climbStairs(45);
console.log(r);