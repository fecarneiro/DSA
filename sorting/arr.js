/*
 * https://claude.ai/chat/2ea26cf0-68a6-442f-87b2-93e3afa093ba
 */
let arr = [3, 7, 2];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

arr = [5, 2, 8, 1];
let count = 0;
for (let i = 0; i <= arr.length - 1; i++) {
  for (let j = 0; j <= arr.length - 1; j++) {
    if (arr[j] != arr[i]) {
      console.log(`i=${i} vs j=${j}: ${arr[i]} vs ${arr[j]}`);
      count++;
    }
  }
}
console.log(count);
