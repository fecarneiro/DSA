function linearSearch(arr, target, size, counter) {
  for (let i = 0; i < size; i++) {
    if (arr[i] == target) {
      console.log(
        `found at array index: ${i} after iterating ${counter} times`
      );
      return i;
    }
    counter++;
  }
}

const arr = [3, 4, 5, 6, 7, 8, 9];
const target = 8;
const size = arr.length;
const counter = 1;

linearSearch(arr, target, size, counter);
