/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let output = [];
    let map = {};
    nums.forEach((item) => map[item] ? map[item] += 1 : map[item] = 1);
    let sortedKeys = Object.keys(map).sort((a, b) => map[a] > map[b]);
    for (let i = 0; i < k; i++) {
        output.push(sortedKeys[i]);
    }
    return output;
}