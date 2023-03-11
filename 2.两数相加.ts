/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // let carry = 0
    // let res = new ListNode()
    // const result = res
    // while (l1) {
    //     if (l2) {
    //         const val = l1.val + l2.val + carry
    //         carry = Math.floor(val / 10)
    //         res.val = val % 10
    //         l2 = l2.next
    //     } else {
    //         const val = l1.val + carry
    //         carry = Math.floor(val / 10)
    //         res.val = val % 10
    //     }
    //     l1 = l1.next
    //     if (l1 || l2) {
    //         res = res.next = new ListNode()
    //     }
    // }
    // while (l2) {
    //     const val = l2.val + carry
    //     carry = Math.floor(val / 10)
    //     res.val = val % 10
    //     l2 = l2.next
    //     if (l2) {
    //         res = res.next = new ListNode()
    //     }
    // }
    // if (carry) {
    //     res = res.next = new ListNode()
    //     res.val = carry
    // }

    // return result

    // use virtual head node 
    let carry = 0
    const dummyhead = new ListNode()
    let cur = dummyhead

    while(l1 || l2 || carry) {
        const l1Val = l1 === null ? 0 : l1.val
        const l2Val = l2 === null ? 0 : l2.val

        const sum = l1Val + l2Val + carry

        carry = sum >= 10 ? 1 : 0

        cur = cur.next = new ListNode()
        cur.val = sum % 10

        l1 = l1 === null ? null : l1.next
        l2 = l2 === null ? null : l2.next
    }

    return dummyhead.next
};
// @lc code=end

