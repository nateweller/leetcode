/**
 * Two Sum
 * 
 * Given an array of integers nums and an integer target, returns indices of the 
 * two numbers such that they add up to target.
 * 
 * @param {number[]}  nums
 * @param {number}    target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let l = i + 1; l < nums.length; l++) {
            if (nums[i] + nums[l] === target) return [i, l];
        }
    }
    return false;
};