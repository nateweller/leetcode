/**
 * 4Sum
 * 
 * Given an array nums of n integers, return an array of all the unique quadruplets 
 * [nums[a], nums[b], nums[c], nums[d]] such that:
 *     0 <= a, b, c, d < n
 *     a, b, c, and d are distinct.
 *     nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    
    let results = [];
    
    /**
     * Result Keys
     * Array of results concatinated into a string with a '-' delimiter.
     * Used to determine unique results.
     * i.e. result [1, 2, 3, 4] has a key of "1-2-3-4".
     */
    let resultKeys = [];
    
    // sort the nums array in ascending order i.e. [-2, -1, 0, 1, 2]
    nums.sort((a, b) => (a - b));
    
    /**
     * Four pointer loop - nested for loops for index "a" and "b", 
     * while "c" and "d" work as left/right pointers respectively.
     */
    for (let a = 0; a < nums.length - 3; a++) {
        for (let b = a + 1; b < nums.length - 2; b++) {
            
            // left pointer
            let c = b + 1;
            // right pointer
            let d = nums.length - 1;

            // keep going until left and right pointers cross
            while (c < d) {

                const result = [nums[a], nums[b], nums[c], nums[d]];
                const sum = nums[a] + nums[b] + nums[c] + nums[d];
                const key = `${nums[a]}-${nums[b]}-${nums[c]}-${nums[d]}`;
                
                if (sum === target) {
                    // save result if it is a unique match
                    if (resultKeys.indexOf(key) === -1) {
                        results.push(result);
                        resultKeys.push(key);
                    }
                    // move both pointers inwards
                    c++;
                    d--;
                } else if (sum < target) {
                    // move left pointer to the right
                    c++;
                } else {
                    // move right pointer to the left
                    d--;
                }

            }

        }
    }
    
    return results;
    
};