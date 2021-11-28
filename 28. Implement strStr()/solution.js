/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    if (needle.length > haystack.length) return -1;
    
    let haystackPointer = 0;
    let needlePointer = 0;
    
    while (haystackPointer < haystack.length && needlePointer < needle.length) {
        if (haystack[haystackPointer] === needle[needlePointer]) {
            haystackPointer++;
            needlePointer++;
        } else {
            haystackPointer = haystackPointer + 1 - needlePointer;
            needlePointer = 0;
        }
    }
        
    if (needlePointer === needle.length) return haystackPointer - needle.length;
        
    return -1;
};