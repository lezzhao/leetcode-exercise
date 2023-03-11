/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    let doubleStr = (s + s).slice(1, s.length * 2 - 1)
    return doubleStr.includes(s)
};
// @lc code=end

