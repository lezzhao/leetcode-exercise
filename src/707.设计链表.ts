/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 */

// @lc code=start

class TNode {
    val: number
    next: TNode

    constructor(_val?: number) {
        this.val = _val || 0
    }
}
class MyLinkedList {
    dummyHead: TNode
    size: number

    constructor() {
        this.dummyHead = new TNode(0)
        this.size = 0
    }

    get(index: number): number {
        if (index < 0 || index > this.size - 1) return -1
        let cur = this.dummyHead.next
        while (index--) {
            cur = cur.next
        }

        return cur.val
    }

    addAtHead(val: number): void {
        const node = new TNode(val)
        node.next = this.dummyHead.next
        this.dummyHead.next = node
        this.size++
    }

    addAtTail(val: number): void {
        const node = new TNode(val)
        let cur = this.dummyHead
        while(cur.next) {
            cur = cur.next
        }
        cur.next = node
        this.size++
    }

    addAtIndex(index: number, val: number): void {
        // insert before index, index can equal the size
        if (index < 0 || index > this.size) return
        const node = new TNode(val)
        let cur = this.dummyHead
        while(index--) {
            cur = cur.next
        }
        node.next = cur.next
        cur.next = node
        this.size++
    }

    deleteAtIndex(index: number): void {
        if (index < 0 || index > this.size - 1) return
        let cur = this.dummyHead
        while(index--) {
            cur = cur.next
        }
        cur.next = cur.next.next
        this.size--
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

