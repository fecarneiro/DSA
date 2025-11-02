//O(n)

const arr = [63, 4, 25, 36, 7, 68, 79];
const target = 7;
const size = arr.length;
const counter = 1;

function linearSearch(arr, target, size, counter) {
  for (let i = 0; i < size; i++) {
    if (arr[i] == target) {
      console.log(
        `found at array index ${i}, after iterating ${counter} times`
      );
      return;
    }
    counter++;
  }
  console.log(
    `array not found after iterating ${counter - 1} times (all array length)`
  );
  return;
}

linearSearch(arr, target, size, counter);
