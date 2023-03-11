/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
    // 全排列方式，适用于 n数之和
    const result: number[][] = []
    const temp: number[] = []
    const len = nums.length
    nums.sort((a, b) => a - b)
    dfs(0, 4, target)
    return result
    /**
     * 
     * @param index 当前索引
     * @param num 几数之和
     * @param target 目标值
     * @returns 
     */
    function dfs(index: number, num: number, target: number) {
        if (num === 0 && target === 0) {
            result.push([...temp])
            return
        }

        if (len - index < num) return
        if (nums[index] * num > target) return
        if (nums[len - 1] * num < target) return

        for (let i = index; i < len; i++) {
            if (i > index && nums[i] === nums[i - 1])
                continue
            temp.push(nums[i])
            dfs(i + 1, num - 1, target - nums[i])
            temp.pop()
        }
    }
};
// @lc code=end

