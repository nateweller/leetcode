/**
 * Is Palindrome Number 
 * 
 * Given an integer x, return true if x is palindrome integer.
 * 
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;

    x = x.toString();
    
    return (
        x.slice(0, Math.floor(x.length / 2)) 
        === 
        x.slice(Math.ceil(x.length / 2)).split('').reverse().join('')
    );
};