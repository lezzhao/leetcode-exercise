/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
    let k = nums.length - 1, i = 0, j = nums.length - 1
    const result: number[] = []
    while(i <= j) {
        const head = nums[i] * nums[i]
        const last = nums[j] * nums[j]
        if (head > last) {
            result[k--] = head
            i++
        } else {
            result[k--] = last
            j--
        }
    }
    return result
};
// @lc code=end

