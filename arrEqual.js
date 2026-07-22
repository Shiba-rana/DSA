//! 1
// const isArrEqual = (arr1, arr2) => {
//     if(arr1.length !== arr2.length) {
//         return false
//     } 

//     for(let i = 0; i < arr1.length; i++) {
//         if(arr1[i] !== arr2[[i]]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isArrEqual([1,4,3], [1,2,3]))

//! 2
const isArrEqual = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
}
console.log(isArrEqual([1,2,3], [1,2,3]))
