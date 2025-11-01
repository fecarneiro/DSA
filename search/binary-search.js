const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 9;
let startIndex = 0;
let endIndex = arr.length - 1;
let middleIndex = (endIndex - startIndex) / 2;

function binarySearch(targetValue, startIndex, endIndex, middleIndex) {
  while (startIndex <= endIndex) {
    if (targetValue == arr[middleIndex]) {
      console.log(`target value at array index ${middleIndex}`);
    }
    if (targetValue > arr[middleIndex]) {
      startIndex = middleIndex;
      middleIndex = startIndex + (endIndex - startIndex) / 2;
    }
  }
  console.log(`matched value found at array index ${middleIndex}`);
  return;
}

binarySearch(startIndex, endIndex, middleIndex, targetValue);
// function binarySearch(targetValue, startIndex, endIndex, middleIndex) {
//   while (targetValue !== arr[middleIndex]) {
//     if (targetValue > arr[middleIndex]) {
//       startIndex = middleIndex;
//       middleIndex = startIndex + (endIndex - startIndex) / 2;
//       if (endIndex - middleIndex == 1) {
//         targetValue = endIndex;
//       }
//     }
//   }
//   console.log(`matched value found at array index ${middleIndex}`);
//   return;
// }

// binarySearch(startIndex, endIndex, middleIndex, targetValue);
