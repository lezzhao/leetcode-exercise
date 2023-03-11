/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
    // 递归实现
    // const res = []
    // function recursive(node: TreeNode | null, arr: number[]) {
    //     if(node === null) return 
    //     recursive(node.left, arr)
    //     arr.push(node.val)
    //     recursive(node.right, arr)
    // }
    // recursive(root, res)

    // return res

    // 迭代实现
    const stack: TreeNode[] = []
    const res = []
    let cur = root
    while(stack.length || cur) {
        if(cur !== null) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
    }

    return res
};
// @lc code=end

