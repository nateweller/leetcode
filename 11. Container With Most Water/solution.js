/**
 * Container With Most Water
 * 
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let maxArea = 0;
    
    // initialize two pointers on opposite sides of the height array
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    
    // scan inwards while checking for potential maxArea values
    while (leftIndex < rightIndex) {
        // calculate the current area
        const minHeight = Math.min(height[leftIndex], height[rightIndex]);
        const currentArea = minHeight * (rightIndex - leftIndex);
        
        // update maxArea if we've got a winner
        if (currentArea > maxArea) maxArea = currentArea;
        
        // move the lower pointer closer to the other side
        if (height[leftIndex] < height[rightIndex]) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }
    
    return maxArea;
};