/*
 * @lc app=leetcode.cn id=77 lang=typescript
 *
 * [77] 组合
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
    const result: number[][] = []
    const path: number[] = []
    function backTracking(n: number, k: number, start: number) {
        if (path.length === k) {
            result.push([...path])
            return
        }
        // for (let i = start; i <= n; i++) {
        // 剪枝 
        for (let i = start; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            backTracking(n, k, i + 1)
            path.pop()
        }
    }

    backTracking(n, k, 1)

    return result
};
// @lc code=end

