/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    function bulidBST(nums: number[], left: number, right: number) {
        if(left > right) return null
        // 取中间节点，两个的话优先右边
        const mid = Math.ceil((left + right) / 2)
        const root = new TreeNode(nums[mid])
        root.right = bulidBST(nums, mid + 1, right)
        root.left = bulidBST(nums, left, mid - 1)
        return root
    }

    return bulidBST(nums, 0, nums.length - 1)
};
// @lc code=end

