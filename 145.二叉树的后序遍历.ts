/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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

function postorderTraversal(root: TreeNode | null): number[] {
    // 递归实现
    // const res = []
    // function recursive(node: TreeNode | null, arr: number[]) {
    //     if(node === null) return arr
    //     recursive(node.left, arr)
    //     recursive(node.right, arr)
    //     arr.push(node.val)
    // }

    // recursive(root, res)
    // return res

    // 迭代实现
    const stack: TreeNode[] = []
    const res = []
    if(root !== null) stack.push(root)
    while(stack.length) {
        const pop = stack.pop()
        res.push(pop.val)
        if(pop.left) {
            stack.push(pop.left)
        }
        if(pop.right) {
            stack.push(pop.right)
        }
    }

    return res.reverse()
};
// @lc code=end

