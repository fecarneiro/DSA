//O(log n)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 'NOT FOUND';
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target1 = 9;
const target2 = 10;

console.log(`Index of ${target1}: ${binarySearch(sortedArray, target1)}`);
console.log(`Index of ${target2}: ${binarySearch(sortedArray, target2)}`);
