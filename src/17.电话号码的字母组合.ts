/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    const result: string[] = []
    const strMap = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const temp: string[] = []
    function backTracking(digit: string, index: number, str: string) {
        if (index === digit.length) {
            // if (temp.length)
            //     result.push(temp.join(''))
            if(str) result.push(str)
            return
        }
        for (let i = 0; i < strMap[digit[index]].length; i++) {
            // temp.push(strMap[digit[index]][i])
            backTracking(digit, index + 1, str + strMap[digit[index]][i])
            // temp.pop()
        }
    }

    backTracking(digits, 0, '')

    return result
};
// @lc code=end

