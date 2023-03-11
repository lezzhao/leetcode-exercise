/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {
    private in: number[] = []
    private out: number[] = []

    constructor() {

    }

    push(x: number): void {
        this.in.push(x)
    }

    pop(): number {
        if(!this.out.length) {
            while(this.in.length) {
               this.out.push(this.in.pop() as number)
            }
        }
        return this.out.pop() as number
    }

    peek(): number {
        const res = this.pop();
        this.out.push(res);
        return res;
    }

    empty(): boolean {
        return !this.in.length && !this.out.length
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

