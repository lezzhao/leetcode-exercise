/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const dummyHead = new ListNode()
    dummyHead.next = head
    let cur = dummyHead
    while (cur && cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }

    return dummyHead.next
};
// @lc code=end

