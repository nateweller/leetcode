/**
 * Longest Palindromic Substring
 * 
 * Given a string s, returns the longest palindromic substring in s.
 * 
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    
    let result = s[0];

    for (let i = 0; i < s.length; i++) {
        let count = 0;
        let leftIndex = rightIndex = i;
        
        while (
            s[leftIndex - 1] !== undefined 
            && 
            s[rightIndex + 1] !== undefined 
            && 
            s[leftIndex - 1] === s[rightIndex + 1]
        ) {
            count += 1;
            leftIndex -= 1;
            rightIndex += 1;
        }
        let length = count * 2 + 1;
        if (length > result.length) {
            result = s.slice(leftIndex, rightIndex + 1);
        }
        
        count = 0;
        leftIndex = i;
        rightIndex = i + 1;
        while (
            s[leftIndex] !== undefined 
            &&
            s[rightIndex] !== undefined
            &&
            s[leftIndex] === s[rightIndex]
        ) {
            count += 1;
            leftIndex -= 1;
            rightIndex += 1;
        }
        length = count * 2;
        if (length > result.length) {
            result = s.slice(leftIndex + 1, rightIndex);
        }
    }
    
    return result;
    
};