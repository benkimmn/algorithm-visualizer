export function bubbleSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(array, animations) {
    const n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // Push comparison first (highlight the bars being compared)
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (array[i] > array[i + 1]) {
                // Swap the elements
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                // Push swap (indices being swapped)
                animations.push([i, i + 1, array[i], array[i + 1]]);
                swapped = true;
            } else {
                // Push a "no-op" swap
                animations.push([-1, -1, -1, -1]);
            }
        }
    } while (swapped);
}