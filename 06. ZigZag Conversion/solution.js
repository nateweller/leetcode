/**
 * ZigZag Conversion
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    
    if (numRows === 1) return s;
    
    let rows = [];
    
    let isIndexAscending = true;
    let tempRow = 0;
    for (let i = 0; i < s.length; i++) {
        
        if (! rows[tempRow]) rows[tempRow] = [];
        rows[tempRow].push(s[i]);
        
        if (isIndexAscending) {
            if (tempRow >= numRows - 1) {
                tempRow--;
                isIndexAscending = false;
            } else {
                tempRow++;
            }
        } else {
            if (tempRow <= 0) {
                tempRow++;
                isIndexAscending = true;
            } else {
                tempRow--;
            }
        }
    }

    return rows.flat().join('');

};