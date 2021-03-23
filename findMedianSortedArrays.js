// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// 
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
//

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const findMedianSortedArrays = (nums1, nums2) => {
    let nums3 = [...nums1, ...nums2];
    nums3.sort(function(a,b) {return a-b});
    let n = nums3.length;
    let m = n>>1;
    return n&1 ? nums3[m] : (nums3[m]+nums3[m-1]) /2;
};
