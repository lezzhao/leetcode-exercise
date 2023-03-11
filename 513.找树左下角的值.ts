/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
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

function findBottomLeftValue(root: TreeNode | null): number {
    // if (root === null) return 0
    // const queue: TreeNode[] = [root]
    // while (queue.length) {
    //     let size = queue.length
    //     let cache
    //     for (let i = 0; i < size; i++) {
    //         const first = queue.shift()
    //         if (i === 0) cache = first
    //         if (first.left) queue.push(first.left)
    //         if (first.right) queue.push(first.right)

    //         if (!queue.length) return cache.val
    //     }
    // }
    // return 0


    // 递归法实现
    if(root === null) return 0
    let maxDepth = -1
    let result
    function traversal(node: TreeNode | null, depth: number) {
        if(node.left === null && node.right === null) {
            if(depth > maxDepth) {
                maxDepth = depth
                result = node.val
            }
        }

        if(node.left) {
            traversal(node.left, depth + 1)
        }
        if(node.right) {
            traversal(node.right, depth + 1)
        }
    }

    traversal(root, 0)
    return result
};
// @lc code=end

