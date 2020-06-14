/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
    let letter = ['A', 'C', 'G', 'T'];
    let bankSet = new Set(bank);
    let queue = [start];
    var visited = [start];
    let level = 0;
    while (queue.length > 0) {
        let size = queue.length;
        while (size > 0) {
            size--;
            let first = queue.shift();
            if (first === end) {
                return level;
            }
            let firstArr = first.split('');
            for (let i = 0; i < firstArr.length; i++) {
                let old = firstArr[i];
                for (let key in letter) {
                    firstArr[i] = letter[key];
                    let tempStr = firstArr.join('');
                    if (visited.indexOf(tempStr) == -1 && bankSet.has(tempStr)) {
                        visited.push(tempStr);
                        queue.push(tempStr);
                    }
                }
                firstArr[i] = old;
            }

        }
        level++;
    }
    return -1;
};
minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]);
// @lc code=end

