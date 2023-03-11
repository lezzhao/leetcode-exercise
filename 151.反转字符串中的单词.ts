/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
    // const isSpace = /\s/
    // const stack: string[] = []
    // let curIndex = 0
    // let temp = '', res = ''
    // while (curIndex < s.length) {
    //     temp += s[curIndex]
    //     if ((isSpace.test(s[curIndex]) || curIndex === s.length - 1) && temp.trim()) {
    //         stack.push(temp.trim())
    //         temp = ''
    //         curIndex++
    //         continue
    //     }
    //     curIndex++
    // }
    // let top = stack.pop()
    // while(top) {
    //     res += top + ' '
    //     top = stack.pop()
    // }

    // return res.trim()


    // 双指针解法
    let slow = 0, arr: string[] = []
    for (let fast = 0; fast < s.length;) {
        if (s[fast] !== ' ') {
            slow = fast
            while (s[fast] !== ' ' && fast < s.length) {
                fast++
            }
            arr.push(s.slice(slow, fast))
        } else {
            fast++
        }
    }

    return arr.reverse().join(' ')
};
// @lc code=end

