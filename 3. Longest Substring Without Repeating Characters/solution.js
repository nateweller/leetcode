/**
 * Length of Longest Substring
 * 
 * Given a string s, returns the length of the longest substring without repeating characters.
 * 
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let longestSubstring = "";
    let tempSubstring = "";
    
    for (let i = 0; i < s.length; i++) {
        
        let rightSide = s.slice(i);
        
        for (let l = 0; l < rightSide.length; l++) {
            if (tempSubstring.indexOf(rightSide[l]) >= 0) {
                break;
            }
            tempSubstring += rightSide[l];
        }
        
        if (tempSubstring.length > longestSubstring.length) {
            longestSubstring = tempSubstring;
        }
        tempSubstring = "";
        
        if (longestSubstring.length >= rightSide.length - 1 ) {
            break;
        }
        
    }
    
    return longestSubstring.length;
};