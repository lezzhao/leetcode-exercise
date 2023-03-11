/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
// class MyStack {
//     private in: number[] = []
//     private out: number[] = []

//     constructor() {

//     }

//     push(x: number): void {
//         this.in.push(x)
//     }

//     pop(): number {
//         while(this.in.length > 1) {
//             this.out.push(this.in.shift()!)
//         }
//         const res: number = this.in.shift()!;
//         this.in = this.out;
//         this.out = [];
//         return res
//     }

//     top(): number {
//         const res = this.pop()
//         this.push(res)
//         return res
//     }

//     empty(): boolean {
//         return !this.in.length && !this.out.length
//     }
// }
// 使用一个队列实现
class MyStack {
    private queue: number[] = []

    constructor() {

    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        let len = this.queue.length - 1
        while(len--) {
            this.queue.push(this.queue.shift()!)
        }
        return this.queue.shift()!
    }

    top(): number {
        const res = this.pop()
        this.push(res)
        return res
    }

    empty(): boolean {
        return !this.queue.length
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

