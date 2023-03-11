/*
 * @lc app=leetcode.cn id=530 lang=typescript
 *
 * [530] 二叉搜索树的最小绝对差
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

function getMinimumDifference(root: TreeNode | null): number {
    let pre: TreeNode | null = null, min = Number.MAX_SAFE_INTEGER
    function dfs(root: TreeNode | null) {
        if (root === null) return
        dfs(root.left)
        if (pre !== null) min = Math.min(min, root.val - pre.val)
        pre = root
        dfs(root.right)
    }
    dfs(root)
    return min
};
// @lc code=end

