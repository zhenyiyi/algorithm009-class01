/**
 * @param {number[]} digits
 * @return {number[]}
 * 测试越界
 */
var plusOne1 = function (digits) {
    let oldValue = digits.reduce(function(x, y){
        return x * 10 + y;
    });
    let newValue = oldValue + 1;

    return String(newValue).split('').map(function(x){
        return parseInt(x);
    });
};


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne2 = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        digits[i] = digits[i] % 10;
        if (digits[i] != 0) {
            return digits;
        }
    }
    let array = Array(digits.length + 1);
    for (let index = 0; index < array.length; index++) {
        if(index == 0) {
            array[index] = 1;
        } else {
            array[index] = 0;
        }
    }
    return array;
}

/**
 * @param {number[]} digits
 * @return {number[]}
 * 完美解法
 */
var plusOne = function (digits) {
    for(let i=digits.length-1; i>=0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    digits[0] = 1;
    digits.push(0);
    return digits;
} 

/**
 * @param {number[]} digits
 * @return {number[]}
 * 暴力解
 */
var plusOne4 = function (digits) {
    return String((BigInt(digits.join('')) + 1)).split('');
}

/**
 * 
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/plus-one
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */