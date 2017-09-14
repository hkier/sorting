function bubbleSort(array) {
    var dirty = true
    var holder = null
    var rtn = null
    if (array.length < 2) { return array };
    while (dirty) {
        dirty = false;
        for (var i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                swap(array, i, i - 1)
                dirty = true;
            }
        }
    }
    return array
} // end bubbleSort

function swap(array, index1, index2) {
    var holder = array[index1];
    array[index1] = array[index2]
    array[index2] = holder;
}   