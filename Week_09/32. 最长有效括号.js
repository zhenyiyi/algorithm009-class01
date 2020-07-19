/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    var stack = [];
    var res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(s[i]);
        } else if (stack.length > 0) {
            stack.pop();
            res++;
        }
    }
    return res;
};