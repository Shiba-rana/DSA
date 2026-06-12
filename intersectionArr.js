function intersectionArr(arr1, arr2) {
    let set1 = new Set(arr1)
    let res = new Set()

    for(let num of arr2) {
        if(set1.has(num)) {
            res.add(num)
        }
    }
    return [...res]
}

console.log(intersectionArr([1, 2, 4], [3, 5, 2, 1]));
