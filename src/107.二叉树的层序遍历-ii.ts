/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
    const queue: TreeNode[] = []
    const res: number[][] = []
    if(root !== null) queue.push(root)
    while(queue.length) {
        let size = queue.length
        const temp = []
        while(size--) {
            const first = queue.shift()
            if(first.left) {
                queue.push(first.left)
            }
            if(first.right) {
                queue.push(first.right)
            }
            temp.push(first.val)
        }
        res.push(temp)
    }

    return res.reverse()
};
// @lc code=end

