/*
 * @lc app=leetcode.cn id=491 lang=typescript
 *
 * [491] 递增子序列
 */

// @lc code=start
function findSubsequences(nums: number[]): number[][] {
    const result: number[][] = []
    const temp: number[] = []
    function backTracking(start: number) {
        if (temp.length > 1) result.push([...temp])
        if (start >= nums.length) return
        const used = new Set()
        for (let i = start; i < nums.length; i++) {
            if ((temp.length && (nums[i] < temp[temp.length - 1]) || used.has(nums[i])))
                continue
            temp.push(nums[i])
            used.add(nums[i])
            backTracking(i + 1)
            temp.pop()
        }
    }
    backTracking(0)
    return result
};
// @lc code=end

