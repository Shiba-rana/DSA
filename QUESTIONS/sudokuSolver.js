function solveSudoku(board) {

    // Check if placing 'num' at (row, col) is valid
    function isValid(board, row, col, num) {

        for (let x = 0; x < 9; x++) {

            // Check same row
            if (board[row][x] === num) return false;

            // Check same column
            if (board[x][col] === num) return false;

            // Check 3×3 box
            let r = 3 * Math.floor(row / 3) + Math.floor(x / 3);
            let c = 3 * Math.floor(col / 3) + (x % 3);

            if (board[r][c] === num) return false;
        }

        return true;
    }

    function helper(board) {

        // Search for an empty cell
        for (let row = 0; row < 9; row++) {

            for (let col = 0; col < 9; col++) {

                if (board[row][col] === ".") {

                    // Try digits 1-9
                    for (let num = 1; num <= 9; num++) {

                        let char = num.toString();

                        if (isValid(board, row, col, char)) {

                            board[row][col] = char;

                            // Solve remaining board
                            if (helper(board))
                                return true;

                            // Backtrack
                            board[row][col] = ".";
                        }
                    }

                    return false;
                }
            }
        }

        return true;
    }

    helper(board);
}

let board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(board);

console.log(board);