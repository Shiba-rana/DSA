//! 1
// function findPivotInd(arr, first, last) {
//   let pivot = arr[first];
//   let i = first + 1;
//   let j = last;

//   while (i <= j) {

//     while (i <= last && arr[i] <= pivot) i++;

//     while (j > first && arr[j] > pivot) j--; 

//     if (i < j) {
//       swap(arr, i, j);
//     }
//   }

//   swap(arr, first, j);
//   return j;
// }

// function quickSort(arr, first, last) {
//   if (first >= last) return;
//   let pIdx = findPivotInd(arr, first, last);
//   quickSort(arr, first, pIdx - 1);
//   quickSort(arr, pIdx + 1, last);
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// let arr = [12, 3, 13, 4, 11, 19, 38, 1];

// quickSort(arr, 0, arr.length - 1);

// console.log(arr); // Output: [1, 3, 4, 11, 12, 13, 19, 38]



//! 2
function quickSort(arr) {
  if(arr.length < 2) return arr

  let pivotInd = Math.floor(Math.random() * arr.length)
  let left = [], right = []
  for(let i = 0; i < arr.length; i++) {
    if(i === pivotInd) 
      continue

    if(arr[i] < arr[pivotInd]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), arr[pivotInd], ...quickSort(right)]
}

console.log(quickSort([12, 3, 13, 4, 11, 19, 38, 1]));
