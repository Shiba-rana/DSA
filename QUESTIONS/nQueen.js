function solveNQueens(n) {
    let res = [];
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));

    function convertBoard(board) {
        return board.map(row => row.join(''));
    }

    function isValid(row, col) {

        // Check same column
        for (let x = 0; x < row; x++) {
            if (board[x][col] === 'Q') return false;
        }

        // Check upper-left diagonal
        for (let r = row, c = col; r >= 0 && c >= 0; r--, c--) {
            if (board[r][c] === 'Q') return false;
        }

        // Check upper-right diagonal
        for (let r = row, c = col; r >= 0 && c < n; r--, c++) {
            if (board[r][c] === 'Q') return false;
        }

        return true;
    }

    function positionNextQueen(row) {
        if (row === n) {
            res.push(convertBoard(board));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';

                positionNextQueen(row + 1);

                // Backtrack
                board[row][col] = '.';
            }
        }
    }

    positionNextQueen(0);

    return res;
}


const n = 4;
const result = solveNQueens(n);

console.log(`Total Solutions: ${result.length}\n`);

result.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach(row => console.log(row));
    console.log();
});