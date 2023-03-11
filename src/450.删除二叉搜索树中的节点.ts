/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return null
    if (root.val === key) {
        if (root.left === null && root.right === null) {
            return null
        } else if (root.left === null) {
            return root.right
        } else if (root.right === null) {
            return root.left
        } else {
            let temp = root.right
            while (temp.left !== null) {
                temp = temp.left
            }
            temp.left = root.left
            return root.right
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else {
        root.right = deleteNode(root.right, key)
    }
    return root
};
// @lc code=end

