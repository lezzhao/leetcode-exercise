/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
    let i = 0, sum = 0, result = Infinity
    for(let j = 0; j < nums.length; j++) {
        sum += nums[j]
        while(sum >= target) {
            result = Math.min(result, j - i + 1)
            sum -= nums[i++]
        }
    }
    return result === Infinity ? 0 : result
};
// @lc code=end

