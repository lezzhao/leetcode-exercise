/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */

 function isValid(col: number, row: number, val: string, board: string[][]): boolean {
    let n: number = board.length;
    // 列向检查
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
        if (board[rowIndex][col] === val) return false;
    }
    // 横向检查
    for (let colIndex = 0; colIndex < n; colIndex++) {
        if (board[row][colIndex] === val) return false;
    }
    // 九宫格检查
    const startX = Math.floor(col / 3) * 3;
    const startY = Math.floor(row / 3) * 3;
    for (let rowIndex = startY; rowIndex < startY + 3; rowIndex++) {
        for (let colIndex = startX; colIndex < startX + 3; colIndex++) {
            if (board[rowIndex][colIndex] === val) return false;
        }
    }
    return true;
}
function solveSudoku(board: string[][]): void {
    function backTracking(board: string[][]): boolean {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') {
                    let temp = 1
                    while(temp <= 9) {
                        if(isValid(j, i, temp.toString(), board)) {
                            board[i][j] = temp.toString()
                            if(backTracking(board)) return true
                            board[i][j] = '.'
                        }
                        temp++
                    }
                    return false
                }
            }
        }
        return true
    }

    backTracking(board)
};
// @lc code=end

