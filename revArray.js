//! 1
// let arr = [1, 2, 3, 4, 5];

// let temp = new Array(arr.length)
// let j = 0
// for(let i = arr.length -1; i >=0; i--) {
//     temp[j] = arr[i]
//     j++
// }

// console.log(temp);

//! 2 Different Way
let array = [3, 4, 5, 6, 7]
let i = 0, j = array.length -1 ;

while(i != j) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
    i++
    j--
}

console.log(array);


