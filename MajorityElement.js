// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// -- Not to be confused with most frequent element ie element that appearst he most regardless of array size.
// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3


// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2


let nums = [2,2,1,1,1,2,2]

const majorityElement = (nums, obj = {}) => {
    for(let i = 0; i < nums.length; i++){ // iterating over nums array
        obj[nums[i]] ? obj[nums[i]]++ : obj[nums[i]] = 1  // creates object from the num[i] and its count ie: { '1': 3, '2': 4 }
        if(obj[nums[i]] >= nums.length / 2)  return nums[i];
    }
};

console.log(majorityElement(nums))
