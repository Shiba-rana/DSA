function mergeSort(arr) {
    if(arr.length < 2) return arr

    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right) {
    const res = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            res.push(left[leftIndex])
            leftIndex++
        } else {
            res.push(right[rightIndex])
            rightIndex++
        }
    }


    while(leftIndex < left.length) {
        res.push(left[leftIndex])
            leftIndex++
    }

    while(rightIndex < right.length) {
        res.push(right[rightIndex])
            rightIndex++
    }

    return res
}

console.log(mergeSort([34, 45, 2, 3, 1, 89]));
