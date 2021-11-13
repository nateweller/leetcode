/**
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
    
    nums.sort((a, b) => (a - b));
    
    for (let a = 0; a < nums.length - 3; a++) {
        for (let b = a + 1; b < nums.length - 2; b++) {
            let c = b + 1;
            let d = nums.length - 1;
            while (c < d) {
                const result = [nums[a], nums[b], nums[c], nums[d]];
                const sum = nums[a] + nums[b] + nums[c] + nums[d];
                const key = `${nums[a]}-${nums[b]}-${nums[c]}-${nums[d]}`;
                if (sum === target) {
                    if (resultKeys.indexOf(key) === -1) {
                        results.push(result);
                        resultKeys.push(key);
                    }
                    c++;
                    d--;
                } else if (sum < target) {
                    c++;
                } else {
                    d--;
                }
            }
        }
    }
    
    return results;
    
};