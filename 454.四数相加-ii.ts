/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map: Map<number, number> = new Map()
    let result = 0
    for (const n1 of nums1) {
        for (const n2 of nums2) {
            const temp = map.get(n1 + n2) || 0
            map.set(n1 + n2, temp + 1)
        }
    }
    for (const n3 of nums3) {
        for (const n4 of nums4) {
            const temp = map.get(-(n3 + n4))
            if (temp) {
                result += temp
            }
        }
    }

    return result
};
// @lc code=end

