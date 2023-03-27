/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const result: number[][] = []
    const temp: number[] = []
    function backTracking(start: number) {
        result.push([...temp])
        if (start >= nums.length) return
        for (let i = start; i < nums.length; i++) {
            temp.push(nums[i])
            backTracking(i + 1)
            temp.pop()
        }
    }
    backTracking(0)
    return result
};
// @lc code=end

