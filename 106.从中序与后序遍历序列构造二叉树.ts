/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    function traversal(inorder: number[], postorder: number[]) {
        // 如果后序数组为0，返回null
        if (postorder.length === 0) return null
        // 获取根节点
        const rootVal = postorder.pop()!
        const root = new TreeNode(rootVal)
        // 如果获取根节点后，后序数组为空，直接返回根节点
        if (postorder.length === 0) return root

        let index = inorder.indexOf(rootVal)
        // 切割中序数组
        const leftInorder = inorder.slice(0, index)
        const rightInorder = inorder.slice(index + 1)
        // 切割后序数组
        const leftPostorder = postorder.slice(0, index)
        const rightPostorder = postorder.slice(index)
        
        root.left = traversal(leftInorder, leftPostorder)
        root.right = traversal(rightInorder, rightPostorder)

        return root
    }

    if (inorder.length === 0 || postorder.length === 0) return null
    return traversal(inorder, postorder)
};
// @lc code=end

