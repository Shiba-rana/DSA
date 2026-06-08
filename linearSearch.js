function linearSearch(arr, target) {
    for(let i = 0; i < arr.length -1; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([12,34,6,8,3], 10));
console.log(linearSearch([12,34,6,8,3], 6));
