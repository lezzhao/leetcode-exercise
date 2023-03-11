/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function getNext(s: string) {
    // i 是后缀， j 是前缀
    let j = 0
    const next = Array.from({ length: s.length }, () => 0)
    for (let i = 1; i < s.length; i++) {
        while (s[i] !== s[j] && j > 0) {
            j = next[j - 1]
        }
        if (s[i] === s[j]) {
            j++
        }
        next[i] = j
    }

    return next
}

function strStr(haystack: string, needle: string): number {
    const next = getNext(needle)
    console.log(next)
    let start = 0, start1 = 0
    const len = needle.length
    if(len === 0) return 0
    while (start < haystack.length) {
        while (start1 > 0 && haystack[start] !== needle[start1]) {
            start1 = next[start1 - 1]
        }
        if (haystack[start] === needle[start1]) {
            start1++
        }

        if (start1 === len) {
            return start - len + 1
        }
        
        start++
    }
    return -1
};
// @lc code=end

