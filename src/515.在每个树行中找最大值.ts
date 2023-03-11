/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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

function largestValues(root: TreeNode | null): number[] {
    const queue:TreeNode[]  = []
    const res: number[] = []
    if(root) {
        queue.push(root)
    }
    while(queue.length) {
        // 获取一层的节点数量
        let size = queue.length
        let max = -Infinity
        // 获取一层的所有节点
        while(size--) {
            const first = queue.shift()
            if(first.left) {
                queue.push(first.left)
            }
            if(first.right) {
                queue.push(first.right)
            }
            max = Math.max(max, first.val)
        }
        res.push(max)
    }
    return res
};
// @lc code=end

