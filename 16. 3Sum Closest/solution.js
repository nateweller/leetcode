/**
 * 3Sum Closest
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    
    let result = {
        sum: null,
        difference: Infinity
    };
    
    nums.sort((a, b) => (a - b));
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            const difference = Math.abs(target - sum);
            
            if (difference < result.difference) {
                result = { sum, difference };
            }
            
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }

    return result.sum;
    
};