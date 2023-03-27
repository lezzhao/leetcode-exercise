/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start
function subsetsWithDup(nums: number[]): number[][] {
    nums.sort()
    const result: number[][] = []
    const temp: number[] = []
    const used = Array.from({ length: nums.length }, () => false)
    function backTracking(start: number) {
        result.push([...temp])
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1] && !used[i - 1]) continue
            temp.push(nums[i])
            used[i] = true
            backTracking(i + 1)
            temp.pop()
            used[i] = false
        }
    }
    backTracking(0)
    return result
};
// @lc code=end

