/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    // const stack: string[] = []
    // const arr = s.split('')
    // for (let i = 0; i < arr.length; i++) {
    //     if (!stack.length) {
    //         stack.push(arr[i])
    //     } else {
    //         const top = stack[stack.length  -1]
    //         if (top === '(' && arr[i] === ')' || top === '[' && arr[i] === ']' || top === '{' && arr[i] === '}') {
    //             stack.pop()
    //         } else {
    //             stack.push(arr[i])
    //         }
    //     }
    // }
    //  return !stack.length

    // better code
    const map = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    const stack: string[] = []
    let top: string | undefined

    for (let char of s) {
        const value = map[char]
        if (value) {
            stack.push(value)
        } else {
            const top = stack.pop()
            if (top !== char) {
                return false
            }
        }
    }
    return !stack.length
};
// @lc code=end

