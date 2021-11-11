/**
 * Longest Common Prefix 
 * 
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    let result = "";
    
    let index = 0;
    while (true) {
        
        let letters = [];
        
        for (const str of strs) {
            if (str[index] === undefined) {
                return result;
            }
            letters.push(str[index]);
        }
        
        const allLettersMatch = (letters.filter(letter => letter === letters[0]).length === letters.length);
        
        if (allLettersMatch) {
            result += letters[0];
        } else {
            return result;
        }
        
        index++;

    }
    
};