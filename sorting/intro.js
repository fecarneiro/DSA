/*
 * https://claude.ai/chat/2ea26cf0-68a6-442f-87b2-93e3afa093ba
 */
let arr = [3, 7, 2];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    // console.log(`i=${i}, j=${j}`);
  }
}

arr = [5, 2, 8, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != arr[i]) {
      // console.log(`i=${i} vs j=${j}: ${arr[i]} vs ${arr[j]}`);
      count++;
    }
  }
}
// console.log(count);

/////////////////////////
arr = [5, 2, 8, 1];
let higher = arr[0];
let current = '';
let position = '';
for (let i = 0; i < arr.length; i++) {
  current = arr[i];
  if (current > higher) {
    higher = current;
    position = i;
  }
}

// console.log(higher);
// console.log(current);
// console.log(position);

if (higher != 0) {
  let temp = arr[0];
  arr[0] = higher;
  arr[position] = temp;
}
// console.log(arr)

arr = [7, 3, 9, 2];

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    let current = arr[i];
    arr[i] = arr[i + 1];
    arr[i + i] = current;
  }
}
console.log(arr);
