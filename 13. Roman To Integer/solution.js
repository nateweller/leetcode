/**
 * Roman Numeral To Integer
 * 
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    const numerals = {
        I:  1,
        IV: 4,
        V:  5,
        IX: 9,
        X:  10,
        XL: 40,
        L:  50,
        XC: 90,
        C:  100,
        CD: 400,
        D:  500,
        CM: 900,
        M:  1000
    };
    
    const subtractionNumerals = Object.keys(numerals).filter(numeral => numeral.length === 2);
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        
        let numeral = s[i];
        
        if (subtractionNumerals.indexOf(numeral + s[i + 1]) >= 0) {
            
            result += numerals[numeral + s[i + 1]];
            i++;
            
        } else {
        
            result += numerals[numeral];
            
        }
            
    }
    
    return result;
};