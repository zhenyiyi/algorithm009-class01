/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];
    let map = new Map();
    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            arr.push(s[i]);
        } else {
            if (arr.length == 0) {
                return false;
            }
            let last = arr[arr.length - 1];
            if (last === map.get(s[i])) {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return arr.length === 0;
};

let ret = isValid('[');
console.log(ret);
