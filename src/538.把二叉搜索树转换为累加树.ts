/*
 * @lc app=leetcode.cn id=538 lang=typescript
 *
 * [538] 把二叉搜索树转换为累加树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function convertBST(root: TreeNode | null): TreeNode | null {
    if (root === null) return null
    let pre: TreeNode | null = null
    function dfs(node: TreeNode) {
        if (node.right) {
            dfs(node.right)
        }
        if (pre) {
            node.val = pre.val + node.val
        }
        pre = node
        if (node.left) {
            dfs(node.left)
        }
        return node
    }


    return dfs(root)
};
// @lc code=end

