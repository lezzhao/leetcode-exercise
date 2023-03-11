/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    const map = Array.from({ length: 26 }, () => 0)
    const baseCode = 'a'.charCodeAt(0)
    for(const char of s) {
        map[char.charCodeAt(0) - baseCode] += 1
    }
    for(const char of t) {
        map[char.charCodeAt(0) - baseCode] -= 1
    }

    return map.every(i => i === 0)
};
// @lc code=end

