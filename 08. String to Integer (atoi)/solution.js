/**
 * String to Integer (atoi)
 * 
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    /** 
     * 1. Read in and ignore any leading whitespace.
     */
    s = s.trim();

    /**
     * 2. Check if the next character (if not already at the end of the string) 
    * is '-' or '+'. Read this character in if it is either. This determines if 
    * the final result is negative or positive respectively. Assume the result 
    * is positive if neither is present.
    */
    let isPositive = s[0] === '-' ? false : true;
    let startIndex = s[0] === '-' || s[0] === '+' ? 1 : 0;
    s = s.slice(startIndex);

    /**
     * 3. Read in next the characters until the next non-digit character or the end 
     * of the input is reached. The rest of the string is ignored.
     */
    let firstNonNumericMatch = /[^0-9]/.exec(s);
    let firstNonNumericIndex = firstNonNumericMatch ? firstNonNumericMatch.index : s.length;
    s = s.slice(0, firstNonNumericIndex);

    /**
     * 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). 
     * If no digits were read, then the integer is 0. Change the sign as
     * necessary (from step 2).
     */
    s = parseInt(s);
    if (! s) return 0;

    /**
     * 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], 
     * then clamp the integer so that it remains in the range. Specifically, 
     * integers less than -231 should be clamped to -231, and integers greater 
     * than 231 - 1 should be clamped to 231 - 1.
     */
    s = isPositive ? s : s * -1;
    if (s < -2147483648) s = -2147483648;
    if (s >= 2147483648 - 1) s = 2147483648 - 1;

    /**
     * 6. Return the integer as the final result.
     */
    return s;
};