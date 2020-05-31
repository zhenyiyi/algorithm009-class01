### 树的遍历

#### [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
};
```



- BFS , 就是从树的顶点，一层的一层的向下遍历。通过 `Queue` 实现，对于 `JS` 来说就用 `Array`

  ```js
  var levelOrder = function(root) {
      let output = [];
      if (!root) return output;
      // 1. 创建一个Queue， 默认层级是 0；
      var queue = [root];
      var level = 0;
      // 2. 队列里面存储每一层的所有节点
      while (queue.length > 0) {
          output.push([]);
          // 3. 取出当前队列的长度
          let length = queue.length;
          for (let i=0; i<length; i++) {
            	// 4. 取出队列中的每一个元素
              var node = queue.shift();
              output[level].push(node.val);
              // 5. 添加新的左右节点到队列中
              if (node.left) queue.push(node.left);
              if (node.right) queue.push(node.right);
          }
          level++;
      }
      return output;
  };
  ```

- DFS, 是从树的顶点 沿着 `左子树`遍历，直到`叶子节点`，然后在遍历 `右子树`, 使用递归来实现

  ```js
  var levelOrder = function(root) {
      let output = [];
      function dfs(node, level) {
          if (!node) return;
          if (!output[level]) {
              output[level] = [];
          }
          output[level].push(node.val);
          dfs(node.left, level+1);
          dfs(node.right, level+1);
      }
      dfs(root, 0);
      return output;
  };
  ```

### 图的遍历

- 和树遍历是一致的，不过需要配合一个Set，添加访问过的节点

  

