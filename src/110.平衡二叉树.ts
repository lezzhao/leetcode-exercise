/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
    function getHeight(node: TreeNode | null) {
        if(node === null) return 0
        const leftH = getHeight(node.left)
        if(leftH === -1) return -1
        const rightH = getHeight(node.right)
        if(rightH === -1) return -1
        return Math.abs(leftH - rightH) > 1 ? -1 : Math.max(leftH, rightH) + 1
    }

    return getHeight(root) !== -1
};
// @lc code=end

