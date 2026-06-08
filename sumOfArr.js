function sumOfArr(arr) {
    if(arr.length === 0) return 0

    return arr[arr.length - 1] + sumOfArr(arr.slice(0, arr.length - 1))
}

console.log(sumOfArr([1,2,3,4,5,6]));
