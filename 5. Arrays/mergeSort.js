function mergeSort(array, half = array.length / 2) {
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half); //left part of array

  return merger(mergeSort(left), mergeSort(array));
}

function merger(left, right) {
  const arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  return [...arr, ...left, ...right];
}

console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]));
