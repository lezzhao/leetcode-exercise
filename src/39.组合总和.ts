/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = []
    const temp: number[] = []
    function backTracking(n: number, start: number) {
        if(n < 0) return
        if (n === 0) {
            result.push([...temp])
            return
        }
        for (let i = start; i < candidates.length; i++) {
            temp.push(candidates[i]);
            backTracking(n - candidates[i], i)
            temp.pop()
        }
    }

    backTracking(target, 0)
    return result
};
// @lc code=end

