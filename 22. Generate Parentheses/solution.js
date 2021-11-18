/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let results = [];
    
    const dfs = (open = 0, closed = 0, initial = "") => {
        if (open === n && closed === n) {
            results.push(initial);
            return;
        }
        if (open < n) {
            dfs(open + 1, closed, `${initial}(`);
        }
        if (open > closed && closed < n) {
            dfs(open, closed + 1, `${initial})`);
        }
    };
    
    dfs();
    
    return results;
};