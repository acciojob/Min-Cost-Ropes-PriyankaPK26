function mincost(arr) {
    // Initialize the total cost
    let totalCost = 0;
    
    // Sort the array in non-decreasing order
    arr.sort((a, b) => a - b);
    
    // Iterate until there is only one rope left
    while (arr.length > 1) {
        // Get the lengths of the two shortest ropes
        const shortest1 = arr.shift();
        const shortest2 = arr.shift();
        
        // Connect the ropes and add the length to the total cost
        const connectedLength = shortest1 + shortest2;
        totalCost += connectedLength;
        
        // Add the connected rope back to the array
        arr.push(connectedLength);
        
        // Re-sort the array
        arr.sort((a, b) => a - b);
    }
    
    // Return the total cost
    return totalCost;
}

module.exports = mincost;