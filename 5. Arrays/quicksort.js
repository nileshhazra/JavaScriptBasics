function quickSort(arr, length = arr.length - 1, start = 0) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  while (start < length) {
    if (arr[start] < pivot) {
      left.push(arr[start]);
    } else {
      right.push(arr[start]);
    }
    start++;
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

arr = [2, 5, 7, 6, 9, 1, 3, 8, 4];
console.log(quickSort(arr));
