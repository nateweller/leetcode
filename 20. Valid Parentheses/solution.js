/**
 * @param {string} str
 * @return {boolean}
 */
const isValid = (str) => {
    
    let stack = [];
    
    for (const char of str) {
        switch (char) {
            case "(":
            case "{":
            case "[":
                stack.push(char);
                break;
            case ")":
                if (stack[stack.length - 1] !== "(") return false;
                stack.pop();
                break;
            case "}":
                if (stack[stack.length - 1] !== "{") return false;
                stack.pop();
                break;
            case "]":
                if (stack[stack.length - 1] !== "[") return false;
                stack.pop();
                break;
                
        }
    }
    
    return ! stack.length;
    
};