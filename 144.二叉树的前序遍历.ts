/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
    // 递归实现
    // const res = []
    // function recursive(node: TreeNode | null, arr: number[]) {
    //     if(node === null) return arr
    //     arr.push(node.val)
    //     recursive(node.left, arr)
    //     recursive(node.right, arr)
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
        if(pop.right !== null) {
            stack.push(pop.right)
        }
        if(pop.left !== null) {
            stack.push(pop.left)
        }
    }
    return res
};
// @lc code=end

