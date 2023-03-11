/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
    let condition = n >> 1
    let startx = 0, starty = 0, offset = 0, num = 1
    const res = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
    let i, j
    while (condition) {
        i = startx
        j = starty
        offset++
        for (; j < n - offset; j++) {
            res[i][j] = num++
        }
        for (; i < n - offset; i++) {
            res[i][j] = num++
        }
        for (; j > starty; j--) {
            res[i][j] = num++
        }
        for (; i > startx; i--) {
            res[i][j] = num++
        }
        startx++
        starty++
        condition--
    }

    if (n % 2 !== 0) {
        const center = n >> 1
        res[center][center] = num++
    }

    return res
};
// @lc code=end

