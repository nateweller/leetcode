/**
 * Integer to Roman Numeral
 * 
 * @param {number} num  The number to convert into Roman Numeral format.
 * @return {string}  The value of num translated into Roman Numeral format.
 */
 var intToRoman = function(num) {
    
    /**
     * Key value pairs of roman numeral characters (keys) and their associated 
     * numeric value (values) in descending order of value.
     */
    const numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = "";
    let tempNum = num;
    
    for (let i = 0; i < Object.keys(numerals).length; i++) {
        const numeral = Object.keys(numerals)[i];
        const numeralValue = numerals[numeral];
        
        while (tempNum >= numeralValue) {
            result += numeral;
            tempNum -= numeralValue;
        }
    }
    
    return result;
    
};