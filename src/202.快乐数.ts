/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start

function getSum(n: number) {
    let sum = 0
    while (n > 0) {
        sum += (n % 10) ** 2
        n = Math.floor(n / 10)
    }
    return sum
}

function isHappy(n: number): boolean {
    const set = new Set()
    while(true) {
        // 如果集合中出现了重复的数字，说明已经进入无限循环
        if (set.has(n)) {
            return false
        }
        set.add(n)
        n = getSum(n)
        if (n === 1) {
            return true
        }
    }
};
// @lc code=end

