/*
 * @lc app=leetcode.cn id=501 lang=typescript
 *
 * [501] 二叉搜索树中的众数
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

function findMode(root: TreeNode | null): number[] {
    let max = undefined, res: number[] = [], count = 0, maxCount = 0
    function dfs(root: TreeNode | null) {
        if (root === null) return
        dfs(root.left)
        if(max === undefined) {
            max = root.val
            count = 1
        } else if(root.val === max) {
            count++
        } else {
            max = root.val
            count = 1
        }
        
        if(count === maxCount) {
            res.push(root.val)
        } else if(count > maxCount) {
            res = [root.val]
            maxCount = count
        }
        dfs(root.right)
    }
    dfs(root)
    return res
};
// @lc code=end

