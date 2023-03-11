/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const map: Record<string, number> = {}
    let start = 0
    while (start < nums.length) {
        const target = map[nums[start]]
        if (target !== undefined) {
            map[nums[start]] = target + 1
        } else {
            map[nums[start]] = 0
        }
        start++
    }
    const arr = Object.keys(map).map(key => ({
        key,
        val: map[key]
    })).sort((a, b) => b.val - a.val)
    return arr.slice(0, k).map(i => parseInt(i.key))
};
// @lc code=end

