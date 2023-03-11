/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = Array.from({ length: 26 }, () => 0)
    const startCode = 'a'.charCodeAt(0)
    for (const char of magazine) {
        map[char.charCodeAt(0) - startCode]++
    }
    for (const char of ransomNote) {
        if (map[char.charCodeAt(0) - startCode]) {
            map[char.charCodeAt(0) - startCode]--
        } else {
            return false
        }
    }
    return map.every(i => i >= 0)
};
// @lc code=end

