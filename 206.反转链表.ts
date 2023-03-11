/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
    // let pre: ListNode | null = null
    // let cur = head
    // while(cur) {
    //     const temp = cur.next
    //     cur.next = pre
    //     pre = cur
    //     cur = temp
    // }

    // return pre

    // recursive 
    function reverse(pre: ListNode | null, cur: ListNode | null): ListNode | null {
        if(!cur) return pre
        const temp = cur.next
        cur.next = pre
        return reverse(cur, temp)
    }

    return reverse(null, head)
};
// @lc code=end

