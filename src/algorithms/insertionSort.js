export function insertionSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    insertionSortHelper(array, animations);
    return animations;
}

function insertionSortHelper(array, animations) {
    const n = array.length;
    for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;

        // Move elements of array[0..i-1], that are greater than key, to one position ahead of their current position
        while (j >= 0 && array[j] > key) {
            animations.push([j + 1, j, array[j], array[j + 1]]); // Swap
            array[j + 1] = array[j];
            j = j - 1;
        }
        animations.push([j + 1, j + 1, key, key]); // Insertion
        array[j + 1] = key;
    }
}