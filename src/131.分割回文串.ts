/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start
const isPartition = (str: string) => {
    let left = 0, right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right])
            return false
        left++
        right--
    }
    return true
}
function partition(s: string): string[][] {
    const result: string[][] = []
    const temp: string[] = []
    function backTracking(start: number) {
        if (start >= s.length) {
            result.push([...temp])
            return
        }
        for (let i = start; i < s.length; i++) {
            const str = s.slice(start, i + 1)
            if (!isPartition(str)) {
                continue
            }
            temp.push(str)
            backTracking(i + 1)
            temp.pop()
        }
    }

    backTracking(0)

    return result
};
// @lc code=end

