/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b)
    const result: number[][] = []
    const temp: number[] = []
    const used = Array.from({ length: candidates.length }, () => false)
    function backTracking(n: number, start: number) {
        if (n < 0) return
        if (n === 0) {
            result.push([...temp])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1] && !used[i - 1]) continue
            temp.push(candidates[i]);
            used[i] = true
            backTracking(n - candidates[i], i + 1)
            temp.pop()
            used[i] = false
        }
    }

    backTracking(target, 0)
    return result
};
// @lc code=end

