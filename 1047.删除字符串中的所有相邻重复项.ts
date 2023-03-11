/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
    const stack: string[] = []
    let len = s.length, cur = 0
    while(cur < len) {
        if(stack[stack.length - 1] === s[cur]) {
            stack.pop()
        } else {
            stack.push(s[cur])
        }
        cur++
    }


    return stack.join('')
};
// @lc code=end

