//https://claude.ai/chat/2ea26cf0-68a6-442f-87b2-93e3afa093ba
let arr = [5, 2, 8, 1];
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

if (higher != 0) {
  let temp = arr[0];
  arr[0] = higher;
  arr[position] = temp;
}
//2

arr = [7, 3, 9, 2];
let cur = '';
let target = '';

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    cur = arr[i];
    arr[i] = arr[i + 1]; // [0]7 = [0]3
    target = cur;
  }
  console.log(arr);
}
