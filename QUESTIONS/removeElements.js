function removeElements(arr, elem) {
    let k = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== elem) {
            arr[k] = arr[i]
            k++
        }
    }
    return k
}

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
const elem = 2;

const k = removeElements(arr, elem);

console.log("k =", k);
console.log("Remaining elements:", arr.slice(0, k));