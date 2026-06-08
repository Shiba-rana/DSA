//! #1
// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while(leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2 )
//         if(target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if(target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1 
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }

// console.log(binarySearch([-5,2,4,6,10], 300));


//! #2
// let arr = [2,3,4,6,8,23,56,78,93,102,105]
// let index = binarySearch(arr, 0, arr.length + 1, 100)

// if(index == -1) {
//     console.log("Not found");
// } else {
//     console.log(`Target found at ${index} index`);
// }

// function binarySearch(arr, first, last, target) {

//     while(first <= last){
//         let mid = Math.floor((first + last)/2)
//         if(arr[mid] == target) return mid
//         else if(arr[mid] > target) last = mid - 1
//         else first = mid + 1
//     }
//     return -1
// }

//! #3
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    // Sorted Array
    // arr.sort((a, b) => a - b)

    if(arr.length === 0) return -1

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if(target === arr[mid]) {
            return mid
        } else if (target < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}
console.log(binarySearch([-5,2,56,6,65,20,10], 20)) 
