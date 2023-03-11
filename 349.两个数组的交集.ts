/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const set = new Set(nums1)
    const result: Set<number> = new Set()
    for(const num of nums2) {
        if (set.has(num)) {
            result.add(num)
        }
    }

    return Array.from(result)
};
// @lc code=end

