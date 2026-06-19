function longestConsecutive(arr) {
    let set = new Set(arr)
    let longest = 0

    for(let num of arr) {
        if(!set.has(num - 1)) {
            let currentNum = num
            let currentLen = 1

            while(set.has(currentNum + 1)) {
                currentNum++
                currentLen++
            }
            longest = Math.max(longest, currentLen)
        }
    }
    return longest
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));

