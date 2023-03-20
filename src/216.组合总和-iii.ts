/*
 * @lc app=leetcode.cn id=216 lang=typescript
 *
 * [216] 组合总和 III
 */

// @lc code=start
function combinationSum3(k: number, n: number): number[][] {
    const result: number[][] = []
    const temp: number[] = []
    function backTracking(n: number, k: number, start: number) {
        if (temp.length === k && n === 0) {
            result.push([...temp])
            return
        }
        for (let i = start; i <= 9; i++) {
            temp.push(i);
            backTracking(n - i, k, i + 1)
            temp.pop()
        }
    }

    backTracking(n, k, 1)
    return result
};
// @lc code=end

