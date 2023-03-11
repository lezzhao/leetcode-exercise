/*
 * @lc app=leetcode.cn id=24 lang=typescript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode()
    dummyHead.next = head
    let cur = dummyHead
    while(cur.next && cur.next.next) {
        const temp = cur.next
        const temp1 = cur.next.next.next

        cur.next = cur.next.next
        cur.next.next = temp
        cur.next.next.next = temp1

        cur = cur.next.next
    }

    return dummyHead.next
};
// @lc code=end

