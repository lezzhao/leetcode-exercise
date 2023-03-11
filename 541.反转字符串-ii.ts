/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverse(s: string, k: number) {
    let left = 0, right = s.length > k ? k - 1 : s.length - 1
    let arr = s.split('')
    while (left <= right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
    }
    return arr.join('')
}

function reverseStr(s: string, k: number): string {
    let curIndex = 0, endIndex = 2 * k
    let res = ''
    const len = s.length
    while (curIndex < len) {
        res += reverse(s.slice(curIndex, endIndex >= len ? len : endIndex), k)
        curIndex += 2 * k
        endIndex += 2 * k

    }

    return res
};
// @lc code=end

