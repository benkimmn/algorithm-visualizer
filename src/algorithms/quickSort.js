export function quickSort(array) {
    const animations = [];
    if (array.length <= 1) return animations;
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
    if (startIdx < endIdx) {
        const pivotIdx = partition(array, startIdx, endIdx, animations);
        quickSortHelper(array, startIdx, pivotIdx - 1, animations);
        quickSortHelper(array, pivotIdx + 1, endIdx, animations);
    }
}

function partition(array, startIdx, endIdx, animations) {
    const pivotValue = array[endIdx];
    let pivotIdx = startIdx;
    for (let i = startIdx; i < endIdx; i++) {
        // Push comparison first (highlight the bars being compared)
        animations.push([i, endIdx]);
        animations.push([i, endIdx]);
        if (array[i] < pivotValue) {
            // Swap the elements
            [array[i], array[pivotIdx]] = [array[pivotIdx], array[i]];
            // Push swap (indices being swapped)
            animations.push([i, pivotIdx, array[i], array[pivotIdx]]);
            pivotIdx++;
        } else {
            // Push a "no-op" comparison and a "no-op" swap
            animations.push([-1, -1, -1, -1]);
            animations.push([-1, -1, -1, -1]);
        }
    }
    // Swap the pivot element with the element at pivotIdx
    [array[pivotIdx], array[endIdx]] = [array[endIdx], array[pivotIdx]];
    // Push the pivot swap animation only once
    animations.push([pivotIdx, endIdx, array[pivotIdx], array[endIdx]]);
    return pivotIdx;
}