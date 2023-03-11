/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
    const res: string[] = []

    function getPath(node: TreeNode | null, str: string) {
        str += str ? `->${node.val}` : node.val
        if (node.left === null && node.right === null) {
            res.push(str)
            return
        }
        if (node.left) {
            getPath(node.left, str)
        }
        if (node.right) {
            getPath(node.right, str)
        }
    }

    getPath(root, '')

    return res
};
// @lc code=end

