/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    // 1. 以 sort 过的字符串 为key， 使用Map
    let map = {};
    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('');
        if (map[key]) {
            map[key].push(strs[i]);
        } else {
            map[key] = [strs[i]];
        }
    }
    let output = [];
    for (let key in map) {
        output.push(map[key]);
    }
    return output;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
