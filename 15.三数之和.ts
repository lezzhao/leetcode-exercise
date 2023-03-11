/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const result: number[][] = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1])
            continue
        if (nums[i] > 0) return result
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            const res = nums[i] + nums[left] + nums[right]
            if (res > 0) {
                right--
            } else if (res < 0) {
                left++
            } else {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            }
        }
    }

    return result
};
// @lc code=end

