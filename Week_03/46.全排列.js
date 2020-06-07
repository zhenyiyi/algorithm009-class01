/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let output = [];
    let map = new Map();
    function dfs(start, arr, map) {
        if (arr.length === nums.length) {
            output.push(arr.slice(0));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!map.has(i)) {
                map.set(i, i);
                arr.push(nums[i]);
                dfs(start + 1, arr, map);
                arr.pop(nums[i]);
                map.delete(i);
            }
        }
    }
    dfs(0, [], map);
    return output;
};