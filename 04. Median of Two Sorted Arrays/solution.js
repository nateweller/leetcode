/**
 * Median of Two Sorted Arrays
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, returns 
 * the median of the two sorted arrays.
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {

    let nums = [...nums1, ...nums2];
        nums.sort((a, b) => a - b);
    
    if (nums.length === 1) {
        return nums[0];
    }

    var middleIndex = Math.floor(nums.length / 2);
    
    if (nums.length % 2) {
        return nums[middleIndex];
    }

    return ((nums[middleIndex] + nums[middleIndex - 1]) / 2);
    
};