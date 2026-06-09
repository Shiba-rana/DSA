function largestNumber(nums) {
    nums.sort((a, b) => {
        let ab = `${a}${b}`
        let ba = `${b}${a}`

        return ba - ab
    })

    if (nums[0] === 0) return "0";
    
    return nums.join("")
}
console.log(largestNumber([10,2]));
