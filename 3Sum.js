function threeSumClosest(nums, target) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Initialize the closest sum
    let closest = nums[0] + nums[1] + nums[2];

    // Step 3: Fix one element and use two pointers
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // Update closest sum if current sum is closer to target
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            // If exact target is found, return immediately
            if (sum === target) {
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closest;
}

const nums1 = [-1, 2, 1, -4];
const target1 = 1;

console.log("Closest Sum:", threeSumClosest(nums1, target1));

const nums2 = [0, 0, 0];
const target2 = 1;

console.log("Closest Sum:", threeSumClosest(nums2, target2));

const nums3 = [1, 1, 1, 0];
const target3 = -100;

console.log("Closest Sum:", threeSumClosest(nums3, target3));