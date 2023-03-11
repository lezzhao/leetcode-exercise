/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {

    // 滑动窗口的思想
    let i = 0, j = 0, res = 0
    const map = new Map()
    while (j < s.length) {
        let letter = s[j];
        if (map.has(letter)) {
            let newIndex = map.get(letter) + 1;
            i = i > newIndex ? i : newIndex;
        }

        map.set(letter, j);
        res = Math.max(res, j - i + 1);
        j++;
    }

    return res
};
// @lc code=end

