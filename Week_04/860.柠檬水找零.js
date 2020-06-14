/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var five = 0, ten = 0
    for (let i = 0 ; i < bills.length; i++) {
        if (bills[i] === 5) {
            five += 1;
        } else if (bills[i] === 10) {
            ten += 1;
            five -= 1;
        } else if (bills[i] === 20) {
            if (ten > 0 ) {
                ten -=1;
                five -=1;
            } else {
                five -= 3;
            }
        }
        if (five < 0) {
            return false;
        }
    }
    return true;
};