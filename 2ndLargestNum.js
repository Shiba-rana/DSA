//! 1
// function secondLargest(arr) {
//     const uniqueArr = Array.from( new Set(arr))

//     uniqueArr.sort((a, b) => {
//         return b - a
//     })

//     if(uniqueArr.length >= 2) {
//         return uniqueArr[1]
//     } else {
//         return -1
//     }
// }
// console.log(secondLargest([10, 5, 10]));

//! 2
function secondlargestOpt(arr) {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest){
            largest = arr[i]
            secondLargest = largest

        } else if(arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}
console.log(secondlargestOpt([10, 5, 10]));