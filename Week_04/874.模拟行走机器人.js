/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    var set = new Set();
    for (let i = 0; i < obstacles.length; i++) {
        let arr = obstacles[i];
        set.add(arr[0] + "," + arr[1]);
    }
    let diections = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];
    var x = 0, y = 0, d = 0, result = 0;
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        if (command == -1) {
            d++;
            if (d == 4) {
                d = 0;
            }
        } else if (command == -2) {
            d--;
            if (d == -1) {
                d = 3;
            }
        } else {
            while (command > 0 && !set.has((x + diections[d][0]) + "," + (y + diections[d][1]))) {
                x += diections[d][0];;
                y += diections[d][1];
                command--;
            }
        }
        result = Math.max(result, x * x + y * y);
    }
    return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = robotSim;
// @after-stub-for-debug-end