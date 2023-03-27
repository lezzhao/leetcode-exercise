/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
    const result: string[] = []
    const temp: string[] = []
    function backTracking(start: number) {
        if (start >= s.length) {
            if (temp.length === 4)
                result.push(temp.join('.'))
            return
        }
        for (let i = start; i < s.length; i++) {
            const str = s.slice(start, i + 1)
            if ((str.startsWith('0') && str.length > 1) || Number(str) > 255) {
                continue
            }
            if(temp.length >= 4) {
                continue
            } 
            temp.push(str)
            backTracking(i + 1)
            temp.pop()
        }
    }

    backTracking(0)

    return result
};
// @lc code=end

