/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    let queue = [beginWord];
    var level = 1;
    let set = new Set(wordList);
    const replaceStr = (str, index, char) => {
        const strAry = str.split('');
        strAry[index] = char;
        return strAry.join('');
    }
    while (queue.length > 0) {
        let size = queue.length;
        while (size > 0) {
            size--;
            let word = queue.shift();
            if (word === endWord) {
                return level;
            }
            for (let i = 0; i < word.length; i++) {
                let w = word;
                for (let j=0; j<26; j++) {
                    const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1); 
                    if (set.has(w2)) {
                        queue.push(w2);
                        set.delete(w2);
                    }
                }
            }
        }
        level++;
    }
    return 0;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = ladderLength;
// @after-stub-for-debug-end