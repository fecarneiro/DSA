const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let startIndex = 0;
let endIndex = arr.length - 1;
let middleIndex = (endIndex - startIndex) / 2;
const targetValue = 7;

function binarySearch(startIndex, endIndex, middleIndex, targetValue) {
  while (targetValue !== arr[middleIndex]) {
    if (targetValue > arr[middleIndex]) {
      startIndex = middleIndex;
      middleIndex = startIndex + (endIndex - startIndex) / 2;
    }
  }
  console.log(`matched value found at array index ${middleIndex}`);
  return;
}

binarySearch(startIndex, endIndex, middleIndex, targetValue);
