/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */


// @lc code=start
function evalRPN(tokens: string[]): number {
    const stack: number[] = [], len = tokens.length
    let start = 0

    function caculateFn(a: number, b: number, operator: string): number {
        switch (operator) {
            case '+':
                return a + b
            case '-':
                return a - b
            case '*':
                return a * b
            case '/':
                return Math.trunc(a / b)
            default:
                return a + b
        }
    }
    while (start < len) {
        const cur = tokens[start]

        if (/\d+/.test(cur)) {
            stack.push(parseInt(cur))
        } else {
            const num1 = stack.pop()!
            const num2 = stack.pop()!
            stack.push(caculateFn(num2, num1, cur))
        }
        start++
    }


    return stack.pop()!
};
// @lc code=end

