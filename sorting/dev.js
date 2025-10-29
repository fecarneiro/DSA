let arr = [10, 2];

if (arr[0] > arr[1]) {
  let tp = arr[0];
  arr[0] = arr[1];
  arr[1] = tp;
}
console.log(arr);
