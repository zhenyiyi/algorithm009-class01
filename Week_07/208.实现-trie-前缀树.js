/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};

};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    var node = this.root;
    for (let ch of word) {
        if (node[ch] == null) {
            node[ch] = {};
        }
        node = node[ch];
    }
    node.isEnd = true;
};

Trie.prototype.traverse = function (word) {
    var node = this.root;
    for (let ch of word) {
        node = node[ch];
        if (node == null) return null;
    }
    return node;
}

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    var node = this.traverse(word);
    return node != null && node.isEnd === true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    return this.traverse(prefix) != null;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

