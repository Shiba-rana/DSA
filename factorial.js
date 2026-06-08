// function factorial(n) {
//     let result = 1
//     for(let i = 2; i <= n; i++) {
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));

//! 2 
function factorial(n) {
    // Base Case
    if(n === 0) return 1

    return n * factorial(n - 1 )
}
console.log(factorial(5));
