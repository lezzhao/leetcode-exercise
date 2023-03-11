/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
	const queue:Node[]  = []
    const res: number[][] = []
    if(root) {
        queue.push(root)
    }
    while(queue.length) {
        // 获取一层的节点数量
        let size = queue.length
        const arr = []
        // 获取一层的所有节点
        while(size--) {
            const first = queue.shift()
            if(first!.children) {
                queue.push(...first!.children)
            }
            arr.push(first!.val)
        }
        res.push(arr)
    }
    return res
};
// @lc code=end

