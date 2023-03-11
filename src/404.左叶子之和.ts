/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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

function sumOfLeftLeaves(root: TreeNode | null): number {
    function getSum(node: TreeNode | null, sum: number) {
        if(node === null) return 0
        if(node.left === null && node.right === null) return 0
        const l = getSum(node.left, sum)
        const r = getSum(node.right, sum)
        // 根据父节点去判定子节点是否为左叶子，是的话收集数值
        const leftChild = node.left
        if(leftChild && leftChild.left === null && leftChild.right === null) {
            sum = leftChild.val + sum + r + l
            return sum
        }

        return sum + r + l
    }

    return getSum(root, 0)
};
// @lc code=end

