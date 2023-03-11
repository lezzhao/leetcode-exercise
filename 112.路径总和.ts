/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root === null) return false
    // function getPathSum(node: TreeNode, sum: number) {
    //     if(node.left === null && node.right === null) return sum === 0
    //     if(node.left) {
    //         let leftFlag = getPathSum(node.left, sum - node.left.val)
    //         if(leftFlag) return true
    //     }
    //     if(node.right) {
    //         let rightFlag = getPathSum(node.right, sum - node.right.val)
    //         if(rightFlag) return true
    //     }

    //     return false
    // }


    // return getPathSum(root, targetSum - root.val)
    if(root.left === null && root.right === null) 
        return targetSum === root.val
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
// @lc code=end

