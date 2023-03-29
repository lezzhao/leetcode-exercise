/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    nums.sort()
    const result: number[][] = []
    const temp: number[] = []
    const set = Array.from({ length: nums.length }, () => false)
    function backTracking() {
        if (temp.length === nums.length) {
            result.push([...temp])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if ((i > 0 && nums[i] === nums[i - 1] && !set[i - 1]) || set[i]) continue
            temp.push(nums[i]);
            set[i] = true
            backTracking()
            set[i] = false
            temp.pop()
        }
    }

    backTracking()
    return result
};
// @lc code=end

