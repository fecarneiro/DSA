let arr = [7, 3, 9, 2];

let counter = 0;
for (let i = 0; i < arr.length - 1; i++) {
  let temp = arr[i];

  if (arr[i] > arr[i + 1]) {
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    counter++;
  }
}
console.log(arr);
console.log(counter);
