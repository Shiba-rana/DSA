//! 1
function sumOfNums(n) {
    if (n === 0) return n

    return n + sumOfNums( n - 1)
}
console.log(sumOfNums(4));
console.log(sumOfNums(5));
console.log(sumOfNums(6));
console.log(sumOfNums(7));
