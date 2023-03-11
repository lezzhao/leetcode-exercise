/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
    function compare(left: TreeNode | null, right: TreeNode | null): boolean {
        if (left === null && right !== null) return false
        else if (left !== null && right === null) return false
        else if (left === null && right === null) return true
        else if(left.val !== right.val) return false
        let outside = compare(left.left, right.right)
        let inside = compare(left.right, right.left)
        return outside && inside
    }
    if(root === null) return false
    return compare(root.left, root.right)
};
// @lc code=end

