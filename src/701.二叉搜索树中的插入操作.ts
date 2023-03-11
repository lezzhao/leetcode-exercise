/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if(root === null) return new TreeNode(val)
    let cur = root
    while(cur) {
        if(cur.val > val) {
            if(cur.left === null) {
                cur.left = new TreeNode(val)
                break
            } else {
                cur = cur.left
            }
        } else {
            if(cur.right === null) {
                cur.right = new TreeNode(val)
                break
            } else {
                cur = cur.right
            }
        }
    }
    return root
};
// @lc code=end

