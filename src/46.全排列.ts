/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    const result: number[][] = []
    const temp: number[] = []
    const set = Array.from({ length: nums.length }, () => false)
    function backTracking() {
        if (temp.length === nums.length) {
            result.push([...temp])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if(set[i]) continue
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

