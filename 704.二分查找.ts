/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
    if(!nums.length) return -1
    let left = 0, right = nums.length
    while(left < right) {
        const middle = (left + right) >> 1
        if (target < nums[middle]) {
            right = middle
        } else if (target > nums[middle]) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
};
// @lc code=end

