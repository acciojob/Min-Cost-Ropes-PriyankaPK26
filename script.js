function mincost(arr) {
    // Convert the array into a min-heap
    arr.sort((a, b) => a - b); // Sort the array to mimic a min-heap

    let totalCost = 0;

    while (arr.length > 1) {
        // Extract the two smallest ropes from the heap
        const min1 = arr.shift();
        const min2 = arr.shift();

        // Calculate the cost of connecting these two ropes
        const cost = min1 + min2;

        // Add the cost to the total
        totalCost += cost;

        // Add the new rope (combined length) back to the heap
        arr.push(cost);
        arr.sort((a, b) => a - b); // Re-sort the array to maintain the min-heap property
    }

    return totalCost;
}

module.exports = mincost;
