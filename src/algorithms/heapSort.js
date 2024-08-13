// Heap Sort
export function heapSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSortHelper(array, animations);
    return animations;
}

function heapSortHelper(array, animations) {
    const n = array.length;

    // Build heap (rearrange array)
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(array, n, i, animations);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        animations.push([0, i, array[i], array[0]]); // Swap
        [array[0], array[i]] = [array[i], array[0]];

        // call max heapify on the reduced heap
        heapify(array, i, 0, animations);
    }
}

// To heapify a subtree rooted with node i which is an index in array[]. n is size of heap
function heapify(array, n, i, animations) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (left < n && array[left] > array[largest])
        largest = left;

    // If right child is larger than largest so far
    if (right < n && array[right] > array[largest])
        largest = right;

    // If largest is not root
    if (largest !== i) {
        animations.push([i, largest, array[largest], array[i]]); // Swap
        [array[i], array[largest]] = [array[largest], array[i]];

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest, animations);
    }
}