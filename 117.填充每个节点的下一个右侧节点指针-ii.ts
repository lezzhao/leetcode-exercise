/*
 * @lc app=leetcode.cn id=117 lang=typescript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
    const queue:Node[]  = []
    if(root) {
        queue.push(root)
    }
    let preNode: Node, curNode: Node
    while (queue.length > 0) {
        const size = queue.length
        for (let i = 0; i < size; i++) {
            if (i === 0) {
                preNode = queue.shift()!; // 取出一层的头结点
            } else {
                curNode = queue.shift()!;
                preNode.next = curNode; // 本层前一个节点next指向本节点
                preNode = curNode;
            }
            if (preNode.left) queue.push(preNode.left);
            if (preNode.right) queue.push(preNode.right);
        }
        preNode.next = null; // 本层最后一个节点指向NULL
    }
    return root;
};
// @lc code=end

