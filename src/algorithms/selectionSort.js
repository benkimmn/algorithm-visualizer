export function selectionSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSortHelper(array, animations);
    return animations;
}

function selectionSortHelper(array, animations) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            animations.push([minIdx, j, -1, -1]); // Highlight
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        animations.push([i, minIdx, -1, -1]); // Revert color
        animations.push([i, minIdx, array[minIdx], array[i]]); // Swap
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
}