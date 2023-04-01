/*
 * @lc app=leetcode.cn id=51 lang=typescript
 *
 * [51] N 皇后
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
    const result: string[][] = []
    const chessBoard = Array.from({length: n}, () => Array.from({length:n}, () => '.'))
    function backTracking(row: number) {
        if(row === n) {
            result.push(chessBoard.map(ietm => ietm.join('')))
            return
        }
        for(let i = 0; i < n; i++) {
            if(!isValid(row, i, chessBoard)) continue
            chessBoard[row][i] = 'Q'
            backTracking(row + 1)
            chessBoard[row][i] = '.'
        }
    }

    backTracking(0)

    return result
};

function isValid(row: number, col: number, chessBoard: string[][]) {
    const n = chessBoard.length
    for (let i = 0; i < row; i++) { // 这是一个剪枝
        if (chessBoard[i][col] == 'Q') {
            return false;
        }
    }
    for (let i = row - 1, j = col - 1; i >=0 && j >= 0; i--, j--) {
        if (chessBoard[i][j] == 'Q') {
            return false;
        }
    }
    for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (chessBoard[i][j] == 'Q') {
            return false;
        }
    }
    return true
}
// @lc code=end

