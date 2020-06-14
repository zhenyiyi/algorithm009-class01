/**
 * @param {number[]} prices
 * @return {number}
 *  DFS
 */
var maxProfit = function (prices) {
    var result = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i + 1]) {
            result += prices[i + 1] - prices[i];
        }
    }
    return result;
};