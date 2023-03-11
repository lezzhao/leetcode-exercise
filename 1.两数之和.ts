/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = new Map()
    for(let j = 0; j < nums.length; j++) {
        const tar = target - nums[j]
        if(map.has(tar)) {
            return [j, map.get(tar)]
        }
        map.set(nums[j], j)
    }
    return [-1, -1];
};
// @lc code=end

