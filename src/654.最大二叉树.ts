/*
 * @lc app=leetcode.cn id=654 lang=typescript
 *
 * [654] 最大二叉树
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    function buildTree(nums: number[]) {
        if(nums.length === 0) return null
        if(nums.length === 1) return new TreeNode(nums[0])
        let index = 1, max = nums[0], maxIndex = 0
        while(index < nums.length) {
            if(max < nums[index]) {
                max = nums[index]
                maxIndex = index
            }
            index++
        }
        let root = new TreeNode(nums[maxIndex])
        root.left = buildTree(nums.slice(0, maxIndex))
        root.right = buildTree(nums.slice(maxIndex + 1))
        return root
    }

    return buildTree(nums)
};
// @lc code=end

