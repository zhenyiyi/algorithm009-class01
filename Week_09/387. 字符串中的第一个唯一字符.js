/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var arr = new Array(26).fill(0);
    var result = -1;
    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97;
        arr[index] += 1;
    }
    for (let j = 0; j < s.length; j++) {
        if (arr[s.charCodeAt(j) - 97] == 1) {
            return j;
        }
    }
    return -1;
};