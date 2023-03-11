/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: number[] = []
    let start = 0, res: number[] = []
    while (start < nums.length) {
        // 判断队尾元素是否小于插入值，只有队尾元素不小于插入值时，停止循环
        while (queue.length && queue[queue.length - 1] < nums[start]) {
            queue.pop()
        }
        queue.push(nums[start])
        // 判断队头元素是否已经超出滑动窗口范围
        let left = start - k + 1
        if(left >= 0) {
            res.push(queue[0])
            if(nums[left] === queue[0]) {
                queue.shift()
            }
        }

        start++
    }

    return res
};
// @lc code=end

